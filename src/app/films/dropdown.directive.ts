import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[omdbFilmDropdown]'
})
export class DropdownDirective {

  @HostBinding('class.open') isOpen = false;

  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
  }

  @HostListener('mouseleave') mouseleave() {
    this.isOpen = false;
  }
}
