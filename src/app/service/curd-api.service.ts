import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CurdApiService {

  constructor(private http : HttpClient) { 

  }
 getFormData(){
    return this.http.get("https://jsonplaceholder.typicode.com/users");
  }
  sendFormData(data:any){
    return this.http.post("https://reqres.in/api/users/", data);
  }
  deleteId(id:any){
    return this.http.delete("https://reqres.in/api/users/" +id);
  }
 /*  updateData(data:any){
    return this.http.put("https://reqres.in/api/users/"+data.id, data)
  } */
}
