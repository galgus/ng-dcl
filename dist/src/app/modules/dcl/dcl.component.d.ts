import { OnInit, ComponentRef, Type, ComponentFactoryResolver, Renderer2, ElementRef, ViewContainerRef, OnChanges, SimpleChange } from '@angular/core';
export declare type InitFunc = (component: ComponentRef<any>, identifier: any, data: any) => void;
export declare class DclComponent implements OnInit, OnChanges {
    private _cr;
    private _renderer;
    private _elem;
    private _view;
    type: Type<any>;
    init: InitFunc;
    data: any;
    identifier: any;
    private _cmpRef;
    constructor(_cr: ComponentFactoryResolver, _renderer: Renderer2, _elem: ElementRef, _view: ViewContainerRef);
    ngOnInit(): void;
    ngOnChanges(changes: {
        [propName: string]: SimpleChange;
    }): void;
}
