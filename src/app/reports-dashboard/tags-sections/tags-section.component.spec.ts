import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagsSectionsComponent } from './tags-section.component';

describe('TagsSectionsComponent', () => {
  let component: TagsSectionsComponent;
  let fixture: ComponentFixture<TagsSectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TagsSectionsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TagsSectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
