import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-details-component',
  standalone: false,
  styleUrl: './details-component.css',
  templateUrl: './details-component.html',
})
export class DetailsComponent implements OnInit{

  public numero!: number;
  public nombre!: string;
  public localidad!: string;

  constructor(private _activeroute: ActivatedRoute, private _detector: ChangeDetectorRef) {}

  ngOnInit(): void {
    this._activeroute.params.subscribe((params: Params) => {
      this.numero = params['numero'];
      this.nombre = params['nombre'];
      this.localidad = params['localidad'];
      this._detector.detectChanges();
    })
  }


}
