import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appFloat]'
})
export class FloatDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('input', ['$event']) mouseOver(event: InputEvent) {
    const value = event.target['value'].trim();
    const label = this.el.nativeElement.querySelector('.label');

    if (value) {
      label.classList.remove('hide');
    } else {
      label.classList.add('hide');
    }
  }
}
