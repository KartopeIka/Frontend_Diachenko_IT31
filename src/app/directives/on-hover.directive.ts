import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[HoverHighlight]',
  standalone: true,
})
export class HoverHighlightDirective {
  constructor(private el: ElementRef) {}

  @HostListener('mouseenter')
  onMouseEnter(): void {
    this.el.nativeElement.style.transform = 'scale(1.04)';
    this.el.nativeElement.style.transition = '0.3s';
    this.el.nativeElement.style.boxShadow = '0 10px 20px #00eaffff';
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    this.el.nativeElement.style.transform = 'scale(1)';
    this.el.nativeElement.style.boxShadow = 'none';
  }
}