import { ElementRef, EventEmitter, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import * as i0 from "@angular/core";
export declare class InViewDirective implements OnInit, OnDestroy {
    private el;
    private renderer;
    animationClasses: string;
    threshold: number;
    triggerOnce: boolean;
    inView: EventEmitter<void>;
    private observer;
    private hasAnimated;
    constructor(el: ElementRef, renderer: Renderer2);
    ngOnInit(): void;
    ngOnDestroy(): void;
    private addClasses;
    static ɵfac: i0.ɵɵFactoryDeclaration<InViewDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<InViewDirective, "[appInView]", never, { "animationClasses": { "alias": "appInView"; "required": false; }; "threshold": { "alias": "threshold"; "required": false; }; "triggerOnce": { "alias": "triggerOnce"; "required": false; }; }, { "inView": "inView"; }, never, never, true, never>;
}
