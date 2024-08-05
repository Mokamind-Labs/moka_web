import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { NgIconComponent } from '@ng-icons/core';

@Component({
  selector: 'app-sidebar-nav',
  standalone: true,
  imports: [NgIconComponent, CommonModule],
  templateUrl: './sidebar-nav.component.html',
  styleUrl: './sidebar-nav.component.scss',
})
export class SidebarNavComponent {
  toogleMenu = input<boolean>(false);
}
