import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdateDepartamentoComponent } from './update-departamento-component';

describe('UpdateDepartamentoComponent', () => {
  let component: UpdateDepartamentoComponent;
  let fixture: ComponentFixture<UpdateDepartamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateDepartamentoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UpdateDepartamentoComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
