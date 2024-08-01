import { Component } from '@angular/core';
import { TagsSectionsComponent } from './tags-sections/tags-section.component';

@Component({
  selector: 'app-reports-dashboard',
  standalone: true,
  imports: [TagsSectionsComponent],
  templateUrl: './reports-dashboard.component.html',
  styleUrl: './reports-dashboard.component.scss',
})
export class ReportsDashboardComponent {}
