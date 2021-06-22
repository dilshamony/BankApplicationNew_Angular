import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteconfirmatinComponent } from './deleteconfirmatin.component';

describe('DeleteconfirmatinComponent', () => {
  let component: DeleteconfirmatinComponent;
  let fixture: ComponentFixture<DeleteconfirmatinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteconfirmatinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteconfirmatinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
