import { CommonModule } from '@angular/common';
import { Component, output } from '@angular/core';

@Component({
  selector: 'app-menu-btn',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu-btn.component.html',
  styleUrl: './menu-btn.component.scss',
})
export class MenuBtnComponent {
  public isOpen = false;

  public menuBtnClicked = output<typeof this.isOpen>();
}
