import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubpageTableComponent } from './subpage-table.component';

describe('SubpageTableComponent', () => {
  let component: SubpageTableComponent;
  let fixture: ComponentFixture<SubpageTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubpageTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubpageTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
