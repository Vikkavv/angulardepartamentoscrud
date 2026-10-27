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

  constructor(private _detector: ChangeDetectorRef, private _service: DepartamentosService) {
    this.departamentos = [];
  }

  async ngOnInit(): Promise<void> {
    this.departamentos = await this._service.getDepartamentosAsync();
    this._detector.detectChanges();
  }

}
