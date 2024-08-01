import { Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { featherAirplay } from '@ng-icons/feather-icons';
import { heroArrowDownTray } from '@ng-icons/heroicons/outline';

@Component({
  selector: 'app-tags-section',
  standalone: true,
  imports: [NgIconComponent],
  providers: [provideIcons({ heroArrowDownTray })],
  templateUrl: './tags-section.component.html',
  styleUrl: './tags-section.component.scss',
})
export class TagsSectionsComponent {}
