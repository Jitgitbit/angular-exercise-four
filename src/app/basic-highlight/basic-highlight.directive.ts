import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appBasicHighLight]'
})
export class BasicHighLightDirective implements OnInit{
  constructor(private elementRef: ElementRef){}

  ngOnInit(){
    this.elementRef.nativeElement.style.backgroundColor = 'green';
    this.elementRef.nativeElement.style.color = 'bisque';
  }
}