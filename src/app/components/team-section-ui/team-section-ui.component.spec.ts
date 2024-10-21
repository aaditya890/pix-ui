import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamSectionUiComponent } from './team-section-ui.component';

describe('TeamSectionUiComponent', () => {
  let component: TeamSectionUiComponent;
  let fixture: ComponentFixture<TeamSectionUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeamSectionUiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeamSectionUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
