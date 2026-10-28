import { ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
import { DepartamentosService } from '../../services/departamentos.service';
import { Departamento } from '../../models/Departamento';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-departamento',
  standalone: false,
  styleUrl: './create-departamento.css',
  templateUrl: './create-departamento.html',
})
export class CreateDepartamento {

  @ViewChild('idDepartamento') idDepartamentoInput!: ElementRef;
  @ViewChild('nombre') nombreInput!: ElementRef;
  @ViewChild('localidad') localidadInput!: ElementRef;
  public message!: string

  constructor(private _detector: ChangeDetectorRef, private _service: DepartamentosService, private _router: Router){}
  
  async enviarDatos() {
    await this._service.insertDepartamento(new Departamento(parseInt(this.idDepartamentoInput.nativeElement.value), this.nombreInput.nativeElement.value, this.localidadInput.nativeElement.value));
    this._router.navigate(['/']);
  }

}
