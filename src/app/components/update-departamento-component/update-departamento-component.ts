import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Departamento } from '../../models/Departamento';
import { DepartamentosService } from '../../services/departamentos.service';

@Component({
  selector: 'app-update-departamento-component',
  standalone: false,
  styleUrl: './update-departamento-component.css',
  templateUrl: './update-departamento-component.html',
})
export class UpdateDepartamentoComponent implements OnInit {

  public numeroDept!: number;
  public departamento!: Departamento;

  @ViewChild('numero') numeroInput!: ElementRef;
  @ViewChild('nombre') nombreInput!: ElementRef;
  @ViewChild('localidad') localidadInput!: ElementRef;

  constructor(private _detector: ChangeDetectorRef, private _router: Router, private _activeroute: ActivatedRoute, private _service: DepartamentosService){}

  ngOnInit(): void {
    this._activeroute.params.subscribe(async (params: Params) => {
      this.numeroDept = params['numero'];
      this.departamento = await this._service.getDepartamentoByID(this.numeroDept);
      this._detector.detectChanges();
    });
  }

  async updateDepartamento(): Promise<void> {
    let id = parseInt(this.numeroInput.nativeElement.value);
    let updatedDepartamento = new Departamento(id, this.nombreInput.nativeElement.value, this.localidadInput.nativeElement.value)
    await this._service.updateDepartamento(updatedDepartamento);
    this._router.navigate(['/deptdetails', updatedDepartamento.numero, updatedDepartamento.nombre, updatedDepartamento.localidad]);
  }

}
