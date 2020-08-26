import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MonitoringService {
  private baseUrl = 'http://localhost:1235/getApps';
  private baseLogin = 'http://localhost:1235/login';
  private getapps='getApps';

  constructor( private http: HttpClient) { }

    getApplication(id: number): Observable<any>{
      return this.http.get(`${this.baseUrl}/${id}`)
    }

    createApplication(appl: Object): Observable<Object> {
      return this.http.post(`${this.baseUrl}`, appl);
    }

    updateApplication(id: number, value: any): Observable<Object> {
      return this.http.put(`${this.baseUrl}/${id}`, value);
    }

    deleteApplication(id: number): Observable<any> {
      return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
    }

    getApplicationsList(): Observable<any> {
      getapps : 'getApps';
      return this.http.get(`${this.baseUrl}`);
    }

    login(){this.http.get(`${this.baseLogin}`);
  }
    
  
}
