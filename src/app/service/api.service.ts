import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
 


  constructor(private http: HttpClient) { }
  getApiData(){
    return this.http.get("https://jsonplaceholder.typicode.com/users")
   }
   
   postApiData(data:any){
     return this.http.post("https://jsonplaceholder.typicode.com/users",data)
   }
  
}
