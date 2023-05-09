import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateFrmComponent } from './template-frm.component';

describe('TemplateFrmComponent', () => {
  let component: TemplateFrmComponent;
  let fixture: ComponentFixture<TemplateFrmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateFrmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateFrmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
