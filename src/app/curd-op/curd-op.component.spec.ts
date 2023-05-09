import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurdOpComponent } from './curd-op.component';

describe('CurdOpComponent', () => {
  let component: CurdOpComponent;
  let fixture: ComponentFixture<CurdOpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurdOpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurdOpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
