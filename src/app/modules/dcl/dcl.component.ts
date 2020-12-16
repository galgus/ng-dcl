import {
  Component,
  OnInit,
  ComponentRef,
  ChangeDetectionStrategy,
  Input,
  Type,
  ComponentFactoryResolver,
  Renderer2,
  ElementRef,
  ViewContainerRef,
  OnChanges,
  SimpleChange,
  ResolvedReflectiveProvider,
  ReflectiveInjector
} from '@angular/core';

export type InitFunc = (
  component: ComponentRef<any>,
  identifier: any,
  data: any
) => void;

const getInjector = (
  viewContainer: ViewContainerRef,
  bindings?: ResolvedReflectiveProvider[]
) => {
  const ctxInjector = viewContainer.parentInjector;
  return Array.isArray(bindings) && bindings.length > 0
    ? ReflectiveInjector.fromResolvedProviders(bindings, ctxInjector)
    : ctxInjector;
};

const createComponent = (
  cfr: ComponentFactoryResolver,
  type: any,
  vcr: ViewContainerRef,
  bindings?: ResolvedReflectiveProvider[],
  projectableNodes?: any[][]
): ComponentRef<any> =>
  vcr.createComponent(
    cfr.resolveComponentFactory(type),
    vcr.length,
    getInjector(vcr, bindings),
    projectableNodes
  );

@Component({
  selector: 'app-dcl',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DclComponent implements OnInit, OnChanges {
  @Input() public type: Type<any>;
  @Input() public init: InitFunc;
  @Input() public data: any;
  @Input() public identifier: any;

  private _cmpRef: ComponentRef<any>;

  constructor(
    private _cr: ComponentFactoryResolver,
    private _renderer: Renderer2,
    private _elem: ElementRef,
    private _view: ViewContainerRef
  ) {}

  ngOnInit() {
    if (this.type) {
      this._cmpRef = createComponent(this._cr, this.type, this._view);
      this._view.element.nativeElement.appendChild(
        this._cmpRef.location.nativeElement
      );
      if (this.init) {
        this.init(this._cmpRef, this.identifier, this.data);
      }
    } else {
      const text = this._renderer.createText(
        this.data !== null && this.data !== undefined ? this.data : ''
      );
      this._renderer.appendChild(this._elem.nativeElement, text);
    }
  }

  ngOnChanges(changes: { [propName: string]: SimpleChange }) {
    if (this._cmpRef) {
      this._view.element.nativeElement.removeChild(
        this._cmpRef.location.nativeElement
      );
      this.ngOnInit();
    }
  }
}
