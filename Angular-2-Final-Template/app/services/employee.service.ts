import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch'; //works as an observable
import 'rxjs/add/observable/throw'; //works as an observable




@Injectable()
export class EmployeeService {
    private _url: string = "apidata/employeedata1.json";


    constructor(private _http: Http) { }

    getEmployees() {
        return this._http.get(this._url)
                            .map((response:Response) => response.json())
                            .catch(this._errorHandler);
        
    }

    _errorHandler( error : Response ) {
        console.error(error);

        return Observable.throw(error || "Server Error");
    }

}
