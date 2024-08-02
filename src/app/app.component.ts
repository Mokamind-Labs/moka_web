import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ReportsDashboardComponent } from './reports-dashboard/reports-dashboard.component';
import { SidebarNavComponent } from './sidebar-nav/sidebar-nav.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FooterComponent, HeaderComponent, ReportsDashboardComponent, SidebarNavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'mb_web_frontend';
  @ViewChild('sidebar', { static: false }) sidebar!: ElementRef;
  openMenu = false;

  toggleSidebarView(event: boolean) {
    this.openMenu = event;
  }
}
