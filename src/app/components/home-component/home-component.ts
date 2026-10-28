import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Departamento } from '../../models/Departamento';
import { DepartamentosService } from '../../services/departamentos.service';

@Component({
  selector: 'app-home-component',
  standalone: false,
  styleUrl: './home-component.css',
  templateUrl: './home-component.html',
})
export class HomeComponent implements OnInit{

  public departamentos: Departamento[];
  public departamentosDefault: Departamento[]
  public defaultNumbers = [10, 20, 30, 40];

  constructor(private _detector: ChangeDetectorRef, private _service: DepartamentosService) {
    this.departamentos = [];
    this.departamentosDefault = [];
  }

  async crearDepartamentosDefault(): Promise<void>{
    this._service.insertAllDefaulDepartamentos();
  }

  takeDefaultDepartamentos():void {
    this.departamentosDefault = [];
    let departamentosDefaultLocal: Departamento[] = []
    for (const departamento of this.departamentos) {
      if(this.defaultNumbers.includes(departamento.numero))
        departamentosDefaultLocal.push(departamento); 
    }
    this.departamentosDefault = departamentosDefaultLocal;
    this._detector.detectChanges();
  }

  async deleteDepartamento(id: number): Promise<void>{
    await this._service.deleteDepartamento(id);
    this.loadDepartamentos();
  }

  async loadDepartamentos(): Promise<void>{
    this.departamentos = await this._service.getDepartamentosAsync();
    this._detector.detectChanges();
  }

  async ngOnInit(): Promise<void> {
    await this.loadDepartamentos();
    this.takeDefaultDepartamentos();
    this._detector.detectChanges();
  }

}
