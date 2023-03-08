import { Injectable } from '@angular/core'; 
import { HttpClient } from '@angular/common/http'; 
@Injectable() 
export class DetailsService { 
    constructor( private http: HttpClient ) { } 
    public getPhotosById(id:string) { 
        return this.http.get('http://localhost:3000/getPhotos/'+id); 
    }
}