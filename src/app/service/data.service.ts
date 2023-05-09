import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public studData: any;
  constructor(private http: HttpClient) {
    this.studData = [
      { name: "Sarika", Branch: "Comp", empId: 1 },
      { name: "jayashree", Branch: "IT", empId: 2 },
      { name: "Rahul", Branch: "Mech", empId: 67 },
      { name: "rina", Branch: "Mech", empId: 67 },
    ]
  }




  getSampleData() {
    return this.studData;

  }
  sendSampleStudData(dt: any) {
    console.log(dt);
  }

  sendApiData(){
    return this.http.get("https://jsonplaceholder.typicode.com/posts")
  } 

  sendFormData(dt:any){
    return this.http.post("https://reqres.in/api/users", dt);
     } 
   
}
