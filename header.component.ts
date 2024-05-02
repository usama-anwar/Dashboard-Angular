import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Output() sideNavToggled = new EventEmitter<boolean>();
  menuStatus : boolean = false
  
  imageUrl: string = 'assets/images/us.svg';
  imageUr2: string = 'assets/images/profile.jpg';
  constructor(){}
ngOnInit(): void {

}
  SideNavToggle() {
this.menuStatus=!this.menuStatus;
this.sideNavToggled.emit(this.menuStatus)
  }
}
