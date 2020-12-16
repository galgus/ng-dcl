import { ReflectiveInjector, Component, ChangeDetectionStrategy, ComponentFactoryResolver, Renderer2, ElementRef, ViewContainerRef, Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const getInjector = (viewContainer, bindings) => {
    const ctxInjector = viewContainer.parentInjector;
    return Array.isArray(bindings) && bindings.length > 0
        ? ReflectiveInjector.fromResolvedProviders(bindings, ctxInjector)
        : ctxInjector;
};
const ɵ0 = getInjector;
const createComponent = (cfr, type, vcr, bindings, projectableNodes) => vcr.createComponent(cfr.resolveComponentFactory(type), vcr.length, getInjector(vcr, bindings), projectableNodes);
const ɵ1 = createComponent;
class DclComponent {
    constructor(_cr, _renderer, _elem, _view) {
        this._cr = _cr;
        this._renderer = _renderer;
        this._elem = _elem;
        this._view = _view;
    }
    ngOnInit() {
        if (this.type) {
            this._cmpRef = createComponent(this._cr, this.type, this._view);
            this._view.element.nativeElement.appendChild(this._cmpRef.location.nativeElement);
            if (this.init) {
                this.init(this._cmpRef, this.identifier, this.data);
            }
        }
        else {
            const text = this._renderer.createText(this.data !== null && this.data !== undefined ? this.data : '');
            this._renderer.appendChild(this._elem.nativeElement, text);
        }
    }
    ngOnChanges(changes) {
        if (this._cmpRef) {
            this._view.element.nativeElement.removeChild(this._cmpRef.location.nativeElement);
            this.ngOnInit();
        }
    }
}
DclComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-dcl',
                template: '',
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
DclComponent.ctorParameters = () => [
    { type: ComponentFactoryResolver },
    { type: Renderer2 },
    { type: ElementRef },
    { type: ViewContainerRef }
];
DclComponent.propDecorators = {
    type: [{ type: Input }],
    init: [{ type: Input }],
    data: [{ type: Input }],
    identifier: [{ type: Input }]
};

class DclModule {
}
DclModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [DclComponent],
                exports: [DclComponent]
            },] }
];

/**
 * Generated bundle index. Do not edit.
 */

export { DclModule, DclComponent as ɵa };
//# sourceMappingURL=ngx-dcl.js.map
