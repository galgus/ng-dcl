import { Component, ChangeDetectionStrategy, Input, ComponentFactoryResolver, Renderer2, ElementRef, ViewContainerRef, ReflectiveInjector } from '@angular/core';
const getInjector = (viewContainer, bindings) => {
    const ctxInjector = viewContainer.parentInjector;
    return Array.isArray(bindings) && bindings.length > 0
        ? ReflectiveInjector.fromResolvedProviders(bindings, ctxInjector)
        : ctxInjector;
};
const ɵ0 = getInjector;
const createComponent = (cfr, type, vcr, bindings, projectableNodes) => vcr.createComponent(cfr.resolveComponentFactory(type), vcr.length, getInjector(vcr, bindings), projectableNodes);
const ɵ1 = createComponent;
export class DclComponent {
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
export { ɵ0, ɵ1 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGNsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi8iLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9kY2wvZGNsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUdULHVCQUF1QixFQUN2QixLQUFLLEVBRUwsd0JBQXdCLEVBQ3hCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsZ0JBQWdCLEVBSWhCLGtCQUFrQixFQUNuQixNQUFNLGVBQWUsQ0FBQztBQVF2QixNQUFNLFdBQVcsR0FBRyxDQUNsQixhQUErQixFQUMvQixRQUF1QyxFQUN2QyxFQUFFO0lBQ0YsTUFBTSxXQUFXLEdBQUcsYUFBYSxDQUFDLGNBQWMsQ0FBQztJQUNqRCxPQUFPLEtBQUssQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDO1FBQ25ELENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxxQkFBcUIsQ0FBQyxRQUFRLEVBQUUsV0FBVyxDQUFDO1FBQ2pFLENBQUMsQ0FBQyxXQUFXLENBQUM7QUFDbEIsQ0FBQyxDQUFDOztBQUVGLE1BQU0sZUFBZSxHQUFHLENBQ3RCLEdBQTZCLEVBQzdCLElBQVMsRUFDVCxHQUFxQixFQUNyQixRQUF1QyxFQUN2QyxnQkFBMEIsRUFDUCxFQUFFLENBQ3JCLEdBQUcsQ0FBQyxlQUFlLENBQ2pCLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsRUFDakMsR0FBRyxDQUFDLE1BQU0sRUFDVixXQUFXLENBQUMsR0FBRyxFQUFFLFFBQVEsQ0FBQyxFQUMxQixnQkFBZ0IsQ0FDakIsQ0FBQzs7QUFPSixNQUFNLE9BQU8sWUFBWTtJQVF2QixZQUNVLEdBQTZCLEVBQzdCLFNBQW9CLEVBQ3BCLEtBQWlCLEVBQ2pCLEtBQXVCO1FBSHZCLFFBQUcsR0FBSCxHQUFHLENBQTBCO1FBQzdCLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFDcEIsVUFBSyxHQUFMLEtBQUssQ0FBWTtRQUNqQixVQUFLLEdBQUwsS0FBSyxDQUFrQjtJQUM5QixDQUFDO0lBRUosUUFBUTtRQUNOLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtZQUNiLElBQUksQ0FBQyxPQUFPLEdBQUcsZUFBZSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDaEUsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FDMUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUNwQyxDQUFDO1lBQ0YsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO2dCQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUNyRDtTQUNGO2FBQU07WUFDTCxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FDcEMsSUFBSSxDQUFDLElBQUksS0FBSyxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FDL0QsQ0FBQztZQUNGLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQzVEO0lBQ0gsQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUE2QztRQUN2RCxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDaEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FDMUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUNwQyxDQUFDO1lBQ0YsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQ2pCO0lBQ0gsQ0FBQzs7O1lBNUNGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsU0FBUztnQkFDbkIsUUFBUSxFQUFFLEVBQUU7Z0JBQ1osZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQ7OztZQTVDQyx3QkFBd0I7WUFDeEIsU0FBUztZQUNULFVBQVU7WUFDVixnQkFBZ0I7OzttQkEyQ2YsS0FBSzttQkFDTCxLQUFLO21CQUNMLEtBQUs7eUJBQ0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgT25Jbml0LFxuICBDb21wb25lbnRSZWYsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBJbnB1dCxcbiAgVHlwZSxcbiAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICBSZW5kZXJlcjIsXG4gIEVsZW1lbnRSZWYsXG4gIFZpZXdDb250YWluZXJSZWYsXG4gIE9uQ2hhbmdlcyxcbiAgU2ltcGxlQ2hhbmdlLFxuICBSZXNvbHZlZFJlZmxlY3RpdmVQcm92aWRlcixcbiAgUmVmbGVjdGl2ZUluamVjdG9yXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgdHlwZSBJbml0RnVuYyA9IChcbiAgY29tcG9uZW50OiBDb21wb25lbnRSZWY8YW55PixcbiAgaWRlbnRpZmllcjogYW55LFxuICBkYXRhOiBhbnlcbikgPT4gdm9pZDtcblxuY29uc3QgZ2V0SW5qZWN0b3IgPSAoXG4gIHZpZXdDb250YWluZXI6IFZpZXdDb250YWluZXJSZWYsXG4gIGJpbmRpbmdzPzogUmVzb2x2ZWRSZWZsZWN0aXZlUHJvdmlkZXJbXVxuKSA9PiB7XG4gIGNvbnN0IGN0eEluamVjdG9yID0gdmlld0NvbnRhaW5lci5wYXJlbnRJbmplY3RvcjtcbiAgcmV0dXJuIEFycmF5LmlzQXJyYXkoYmluZGluZ3MpICYmIGJpbmRpbmdzLmxlbmd0aCA+IDBcbiAgICA/IFJlZmxlY3RpdmVJbmplY3Rvci5mcm9tUmVzb2x2ZWRQcm92aWRlcnMoYmluZGluZ3MsIGN0eEluamVjdG9yKVxuICAgIDogY3R4SW5qZWN0b3I7XG59O1xuXG5jb25zdCBjcmVhdGVDb21wb25lbnQgPSAoXG4gIGNmcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICB0eXBlOiBhbnksXG4gIHZjcjogVmlld0NvbnRhaW5lclJlZixcbiAgYmluZGluZ3M/OiBSZXNvbHZlZFJlZmxlY3RpdmVQcm92aWRlcltdLFxuICBwcm9qZWN0YWJsZU5vZGVzPzogYW55W11bXVxuKTogQ29tcG9uZW50UmVmPGFueT4gPT5cbiAgdmNyLmNyZWF0ZUNvbXBvbmVudChcbiAgICBjZnIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkodHlwZSksXG4gICAgdmNyLmxlbmd0aCxcbiAgICBnZXRJbmplY3Rvcih2Y3IsIGJpbmRpbmdzKSxcbiAgICBwcm9qZWN0YWJsZU5vZGVzXG4gICk7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1kY2wnLFxuICB0ZW1wbGF0ZTogJycsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIERjbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkgcHVibGljIHR5cGU6IFR5cGU8YW55PjtcbiAgQElucHV0KCkgcHVibGljIGluaXQ6IEluaXRGdW5jO1xuICBASW5wdXQoKSBwdWJsaWMgZGF0YTogYW55O1xuICBASW5wdXQoKSBwdWJsaWMgaWRlbnRpZmllcjogYW55O1xuXG4gIHByaXZhdGUgX2NtcFJlZjogQ29tcG9uZW50UmVmPGFueT47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfY3I6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgX2VsZW06IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBfdmlldzogVmlld0NvbnRhaW5lclJlZlxuICApIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKHRoaXMudHlwZSkge1xuICAgICAgdGhpcy5fY21wUmVmID0gY3JlYXRlQ29tcG9uZW50KHRoaXMuX2NyLCB0aGlzLnR5cGUsIHRoaXMuX3ZpZXcpO1xuICAgICAgdGhpcy5fdmlldy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuYXBwZW5kQ2hpbGQoXG4gICAgICAgIHRoaXMuX2NtcFJlZi5sb2NhdGlvbi5uYXRpdmVFbGVtZW50XG4gICAgICApO1xuICAgICAgaWYgKHRoaXMuaW5pdCkge1xuICAgICAgICB0aGlzLmluaXQodGhpcy5fY21wUmVmLCB0aGlzLmlkZW50aWZpZXIsIHRoaXMuZGF0YSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHRleHQgPSB0aGlzLl9yZW5kZXJlci5jcmVhdGVUZXh0KFxuICAgICAgICB0aGlzLmRhdGEgIT09IG51bGwgJiYgdGhpcy5kYXRhICE9PSB1bmRlZmluZWQgPyB0aGlzLmRhdGEgOiAnJ1xuICAgICAgKTtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLmFwcGVuZENoaWxkKHRoaXMuX2VsZW0ubmF0aXZlRWxlbWVudCwgdGV4dCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogeyBbcHJvcE5hbWU6IHN0cmluZ106IFNpbXBsZUNoYW5nZSB9KSB7XG4gICAgaWYgKHRoaXMuX2NtcFJlZikge1xuICAgICAgdGhpcy5fdmlldy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlQ2hpbGQoXG4gICAgICAgIHRoaXMuX2NtcFJlZi5sb2NhdGlvbi5uYXRpdmVFbGVtZW50XG4gICAgICApO1xuICAgICAgdGhpcy5uZ09uSW5pdCgpO1xuICAgIH1cbiAgfVxufVxuIl19