import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {stringify} from 'querystring';
import {catchError} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class AppItemService{

  private _jsonData: BehaviorSubject<CsvInJson>;
  private readonly currentdata: Observable<CsvInJson>;
  private httpOptions:{ headers: HttpHeaders };
  private _finaljsonData: BehaviorSubject<JSON>;
  private readonly finalcurrentdata: Observable<JSON>;

  constructor(private http: HttpClient) {
    this._jsonData = new BehaviorSubject<CsvInJson>(undefined);
    this.currentdata = this._jsonData.asObservable();

    this._finaljsonData = new BehaviorSubject<JSON>(undefined);
    this.finalcurrentdata = this._finaljsonData.asObservable();
    this.httpOptions= {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: 'my-auth-token'
      })
    };
  }
  fftURL = 'http://127.0.0.1:5000/api/';

  changeData(csvInJson: CsvInJson) {
    this._jsonData.next( csvInJson );
    this._finaljsonData.next(JSON);
  }


  get currentData(): Observable<CsvInJson> {
    return this.currentdata;

  }
  get finalcurrentData(): Observable<JSON>{
    return this.finalcurrentdata
  }
/*  getFft(finaldata){
    console.log(finaldata)
    console.log(this.http.post<JSON>(this.fftURL,finaldata,    {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'responseType': 'text' } )}));
   this.http.post<JSON>(this.fftURL,finaldata);
 return (this.http.get<JSON>(this.fftURL))
  }*/

  getFFT(fft: any): Observable<any> {
    return this.http.post<any>(this.fftURL, fft, this.httpOptions)
      .pipe(
        catchError(this.handleError('getFFT', fft))
      );
  }

  private handleError(fft1: string, fft: any) {
    return function(p1: any, p2: Observable<any>) {
      return undefined;
    };
  }
}




export interface CsvInJson {
  properties: [];
  result: [];
}
export interface fftData {
  fft: [];
  classes: [];
}
