import * as i0 from '@angular/core';
import { EventEmitter, Output, Input, Directive } from '@angular/core';

class InViewDirective {
    el;
    renderer;
    animationClasses = ''; // Optional
    threshold = 0.1;
    triggerOnce = true;
    inView = new EventEmitter();
    observer;
    hasAnimated = false;
    constructor(el, renderer) {
        this.el = el;
        this.renderer = renderer;
    }
    ngOnInit() {
        // Hide initially (optional)
        this.renderer.setStyle(this.el.nativeElement, 'visibility', 'hidden');
        this.observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.intersectionRatio >= this.threshold && (!this.triggerOnce || !this.hasAnimated)) {
                    this.renderer.setStyle(this.el.nativeElement, 'visibility', 'visible');
                    if (this.animationClasses?.trim()) {
                        this.addClasses(); // Only add classes if provided
                    }
                    this.inView.emit(); // Always emit the event
                    this.hasAnimated = true;
                    if (this.triggerOnce) {
                        this.observer.unobserve(this.el.nativeElement);
                    }
                }
            });
        }, { threshold: this.threshold });
        this.observer.observe(this.el.nativeElement);
    }
    ngOnDestroy() {
        if (this.observer) {
            this.observer.disconnect();
        }
    }
    addClasses() {
        const classList = this.animationClasses.split(' ');
        classList.forEach(cls => {
            if (cls.trim()) {
                this.renderer.addClass(this.el.nativeElement, cls.trim());
            }
        });
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: InViewDirective, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "19.2.14", type: InViewDirective, isStandalone: true, selector: "[appInView]", inputs: { animationClasses: ["appInView", "animationClasses"], threshold: "threshold", triggerOnce: "triggerOnce" }, outputs: { inView: "inView" }, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: InViewDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[appInView]'
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }, { type: i0.Renderer2 }], propDecorators: { animationClasses: [{
                type: Input,
                args: ['appInView']
            }], threshold: [{
                type: Input
            }], triggerOnce: [{
                type: Input
            }], inView: [{
                type: Output
            }] } });

/*
 * Public API Surface of in-view
 */

/**
 * Generated bundle index. Do not edit.
 */

export { InViewDirective };
//# sourceMappingURL=in-view.mjs.map
