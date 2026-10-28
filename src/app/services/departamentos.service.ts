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

    async getDepartamentoByID(id: number): Promise<Departamento>{
        return await firstValueFrom(this._http.get<Departamento>(environment.apiDepartamentos + "/departamentos/" + id))
    }

    async insertAllDefaulDepartamentos(): Promise<void>{
        let departamentos: Departamento[] = [];
        departamentos.push(new Departamento(10, "DISNEYLAND", "PARIS"), new Departamento(20, "PARQUE WARNER", "MADRID"), new Departamento(30, "PORT AVENTURA", "TABARNIA"), new Departamento(40, "TERRA MITICA", "BENIDORM"));
        for (const departamento of departamentos) {
            let departamentoDB = await this.getDepartamentoByID(departamento.numero);
            if(departamentoDB?.numero == departamento.numero) continue;
            await this.insertDepartamento(departamento);
        }
    }

    async insertDepartamento(departamento: Departamento): Promise<any>{
        let departamentoJson: string = JSON.stringify(departamento);
        let header = new HttpHeaders();
        header = header.set("content-type", "application/json");
        return firstValueFrom(
            this._http.post(environment.apiDepartamentos + "/departamentos", departamentoJson, {headers: header})
        )
    }

    async updateDepartamento(departamento: Departamento): Promise<any>{
        let json = JSON.stringify(departamento);
        let header = new HttpHeaders().set("content-type", "application/json");
        return firstValueFrom(this._http.put(environment.apiDepartamentos + "/departamentos", json, {headers: header}));
    }

    async deleteDepartamento(id: number): Promise<any> {
        return await firstValueFrom(this._http.delete(environment.apiDepartamentos + "/departamentos/" + id));
    }

}