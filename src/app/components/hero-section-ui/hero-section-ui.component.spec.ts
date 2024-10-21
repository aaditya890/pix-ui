import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroSectionUiComponent } from './hero-section-ui.component';

describe('HeroSectionUiComponent', () => {
  let component: HeroSectionUiComponent;
  let fixture: ComponentFixture<HeroSectionUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroSectionUiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeroSectionUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
