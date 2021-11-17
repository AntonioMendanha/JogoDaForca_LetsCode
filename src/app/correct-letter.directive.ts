import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[isCorrectL]'
})
export class CorrectLetterDirective implements OnInit{

  @Input() isCorrectLetter: boolean = false;

  constructor(private element: ElementRef, private renderer: Renderer2) { }


  ngOnInit(): void {  
    if (this.isCorrectLetter) {
      this.renderer.setStyle(
        this.element.nativeElement,
        'background-color', 'green'
      )
    }
  }

}
