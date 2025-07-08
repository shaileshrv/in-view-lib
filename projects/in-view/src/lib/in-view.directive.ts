import {
    Directive,
    ElementRef,
    EventEmitter,
    Input,
    OnDestroy,
    OnInit,
    Output,
    Renderer2
  } from '@angular/core';
  
  @Directive({
    selector: '[appInView]'
  })
  export class InViewDirective implements OnInit, OnDestroy {
  
    @Input('appInView') animationClasses: string = ''; // Optional
    @Input() threshold: number = 0.1;
    @Input() triggerOnce: boolean = true;
  
    @Output() inView: EventEmitter<void> = new EventEmitter();
  
    private observer!: IntersectionObserver;
    private hasAnimated: boolean = false;
  
    constructor(private el: ElementRef, private renderer: Renderer2) {}
  
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
  
    private addClasses() {
      const classList = this.animationClasses.split(' ');
      classList.forEach(cls => {
        if (cls.trim()) {
          this.renderer.addClass(this.el.nativeElement, cls.trim());
        }
      });
    }
  }
  