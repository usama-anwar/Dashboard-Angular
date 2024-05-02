import { Component, Input, } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.scss'
})
export class SideNavComponent {

@Input() sideNavStatus:boolean=false;



}
