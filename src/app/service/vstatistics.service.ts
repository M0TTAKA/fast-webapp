import { Injectable } from '@angular/core';
import { VStatistic } from '../models/vstatistic';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class VStatisticsService {

  constructor(private http: HttpClient) { }
  baseUrl : string = 'http://localhost:5000'

  getAll = (): Observable<VStatistic[]> => {
    let items: Observable<VStatistic[]>

    items = this.http.get<VStatistic[]>(`${this.baseUrl}/vstatistics`, httpOptions)

    return items
  }

  getById = (id : number) : Observable<VStatistic> => {
    let item : Observable<VStatistic>

    item = this.http.get<VStatistic>(`${this.baseUrl}/vstatistics/${id}`, httpOptions)

    return item
  }

  save = (vstatistic : VStatistic) : Observable<VStatistic> => {
    let item : Observable<VStatistic>

    if(vstatistic.id) {
      const url = `${this.baseUrl}/vstatistics/${vstatistic.id}`

      item = this.http.put<VStatistic>(url, vstatistic, httpOptions)
    } else {

      
      item = this.http.post<VStatistic>(`${this.baseUrl}/vstatistics`, vstatistic, httpOptions)
    }

    return item
  }


}
