import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[omdbFilmDropdown]'
})
export class DropdownDirective {

  private isOpen = false;

  @HostListener('click') open(){
    this.isOpen = true;
  }

  @HostListener('mouseleave') close(){
    this.isOpen = false;
  }

  @HostBinding('class.open') get opened(){
    return this.isOpen;
  }

}
