import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarNavContentComponent } from './sidebar-nav-content.component';

describe('SidebarNavComponent', () => {
  let component: SidebarNavContentComponent;
  let fixture: ComponentFixture<SidebarNavContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarNavContentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SidebarNavContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
