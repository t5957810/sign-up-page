import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appIconColorChange]'
})
export class IconColorChangeDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseenter') mouseOver (event: Event){
    const iconEl = this.el.nativeElement.querySelector('.logo');
    iconEl.classList.add('white');
  }
  @HostListener('mouseleave') mouseLeave (event: Event){
    const iconEl = this.el.nativeElement.querySelector('.logo');
    iconEl.classList.remove('white');
  }

}
