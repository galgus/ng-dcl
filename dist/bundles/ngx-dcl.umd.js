(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('ngx-dcl', ['exports', '@angular/core', '@angular/common'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['ngx-dcl'] = {}, global.ng.core, global.ng.common));
}(this, (function (exports, core, common) { 'use strict';

    var getInjector = function (viewContainer, bindings) {
        var ctxInjector = viewContainer.parentInjector;
        return Array.isArray(bindings) && bindings.length > 0
            ? core.ReflectiveInjector.fromResolvedProviders(bindings, ctxInjector)
            : ctxInjector;
    };
    var ɵ0 = getInjector;
    var createComponent = function (cfr, type, vcr, bindings, projectableNodes) { return vcr.createComponent(cfr.resolveComponentFactory(type), vcr.length, getInjector(vcr, bindings), projectableNodes); };
    var ɵ1 = createComponent;
    var DclComponent = /** @class */ (function () {
        function DclComponent(_cr, _renderer, _elem, _view) {
            this._cr = _cr;
            this._renderer = _renderer;
            this._elem = _elem;
            this._view = _view;
        }
        DclComponent.prototype.ngOnInit = function () {
            if (this.type) {
                this._cmpRef = createComponent(this._cr, this.type, this._view);
                this._view.element.nativeElement.appendChild(this._cmpRef.location.nativeElement);
                if (this.init) {
                    this.init(this._cmpRef, this.identifier, this.data);
                }
            }
            else {
                var text = this._renderer.createText(this.data !== null && this.data !== undefined ? this.data : '');
                this._renderer.appendChild(this._elem.nativeElement, text);
            }
        };
        DclComponent.prototype.ngOnChanges = function (changes) {
            if (this._cmpRef) {
                this._view.element.nativeElement.removeChild(this._cmpRef.location.nativeElement);
                this.ngOnInit();
            }
        };
        return DclComponent;
    }());
    DclComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'app-dcl',
                    template: '',
                    changeDetection: core.ChangeDetectionStrategy.OnPush
                },] }
    ];
    DclComponent.ctorParameters = function () { return [
        { type: core.ComponentFactoryResolver },
        { type: core.Renderer2 },
        { type: core.ElementRef },
        { type: core.ViewContainerRef }
    ]; };
    DclComponent.propDecorators = {
        type: [{ type: core.Input }],
        init: [{ type: core.Input }],
        data: [{ type: core.Input }],
        identifier: [{ type: core.Input }]
    };

    var DclModule = /** @class */ (function () {
        function DclModule() {
        }
        return DclModule;
    }());
    DclModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [common.CommonModule],
                    declarations: [DclComponent],
                    exports: [DclComponent]
                },] }
    ];

    /**
     * Generated bundle index. Do not edit.
     */

    exports.DclModule = DclModule;
    exports.ɵa = DclComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ngx-dcl.umd.js.map
