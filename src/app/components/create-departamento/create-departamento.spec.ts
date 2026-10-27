import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateDepartamento } from './create-departamento';

describe('CreateDepartamento', () => {
  let component: CreateDepartamento;
  let fixture: ComponentFixture<CreateDepartamento>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateDepartamento],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateDepartamento);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
