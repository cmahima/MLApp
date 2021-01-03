import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppPreprocessComponent } from './app-preprocess.component';

describe('AppPreprocessComponent', () => {
  let component: AppPreprocessComponent;
  let fixture: ComponentFixture<AppPreprocessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppPreprocessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppPreprocessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
