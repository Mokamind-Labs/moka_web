import { Component, output } from '@angular/core';
import { MenuBtnComponent } from '../../shared/ui/menu-btn/menu-btn.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MenuBtnComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  public openSidebarMenu = output<boolean>();

  sendOpenMenuEvent(event: boolean) {
    this.openSidebarMenu.emit(event);
  }
}
