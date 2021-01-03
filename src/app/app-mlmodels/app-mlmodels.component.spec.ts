import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppMlmodelsComponent } from './app-mlmodels.component';

describe('AppMlmodelsComponent', () => {
  let component: AppMlmodelsComponent;
  let fixture: ComponentFixture<AppMlmodelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppMlmodelsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppMlmodelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
