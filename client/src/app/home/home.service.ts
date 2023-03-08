import { Injectable } from '@angular/core'; 
import { HttpClient } from '@angular/common/http'; 
@Injectable() 
export class HomeService { 
    constructor( private http: HttpClient ) { } 
    public getPhotos() { 
        return this.http.get('http://localhost:3000/getPhotos'); 
    }
}