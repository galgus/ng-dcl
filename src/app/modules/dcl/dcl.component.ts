import {
  Component,
  OnInit,
  ComponentRef,
  ChangeDetectionStrategy,
  Input,
  Type,
  Renderer2,
  ElementRef,
  ViewContainerRef,
  OnChanges
} from '@angular/core';

export type InitFunc = (
  component: ComponentRef<any>,
  identifier: any,
  data: any
) => void;

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

  private componentRef: ComponentRef<any>;

  constructor(
    private renderer: Renderer2,
    private elementRef: ElementRef,
    private viewContainerRef: ViewContainerRef
  ) {}

  ngOnInit() {
    if (this.type) {
      this.createComponent();
      return;
    }

    const text = this.renderer.createText(this.data as string);
    this.renderer.appendChild(this.elementRef.nativeElement, text);
  }

  createComponent() {
    if (this.type) {
      const viewContainerRef = this.viewContainerRef;
      viewContainerRef.clear();

      this.componentRef = viewContainerRef.createComponent<any>(this.type, {
        injector: viewContainerRef.injector
      });

      this.viewContainerRef.element.nativeElement.appendChild(
        this.componentRef.location.nativeElement
      );

      if (this.init) {
        this.init(this.componentRef, this.identifier, this.data);
      }
    }
  }

  ngOnChanges() {
    if (this.componentRef) {
      this.viewContainerRef.element.nativeElement.removeChild(
        this.componentRef.location.nativeElement
      );
      this.ngOnInit();
    }
  }
}
