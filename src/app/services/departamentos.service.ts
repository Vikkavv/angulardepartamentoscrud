import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Departamento } from "../models/Departamento";
import { firstValueFrom } from "rxjs";
import { environment } from "../../environments/environment.development";

@Injectable()
export class DepartamentosService{
    constructor(private _http: HttpClient) {}

    async getDepartamentosAsync(): Promise<Departamento[]> {
        return await firstValueFrom(this._http.get<Departamento[]>(environment.apiDepartamentos + "/departamentos"));
    }

    async insertDepartamento(departamento: Departamento): Promise<any>{
        let departamentoJson: string = JSON.stringify(departamento);
        let header = new HttpHeaders();
        header = header.set("content-type", "application/json");
        return firstValueFrom(
            this._http.post(environment.apiDepartamentos + "/departamentos", departamentoJson, {headers: header})
        )
    }

}