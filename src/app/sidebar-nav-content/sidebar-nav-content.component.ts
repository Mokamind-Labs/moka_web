import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { NgIconComponent } from '@ng-icons/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-sidebar-nav-content',
  standalone: true,
  imports: [NgIconComponent, CommonModule, MatExpansionModule, MatIconModule],
  templateUrl: './sidebar-nav-content.component.html',
  styleUrl: './sidebar-nav-content.component.scss',
})
export class SidebarNavContentComponent {
  toogleMenu = input<boolean>(false);

  constructor(
    iconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    iconRegistry.addSvgIcon('analyticsIcon', this.domSanitizer.bypassSecurityTrustResourceUrl('../../assets/icons/analytics-dashboard-menu.svg'));
  }
}
