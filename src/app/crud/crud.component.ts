import { Component } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent {
  public userData:any=[];
  public postd:any;
  constructor(private api: ApiService){
  

  }
  getApiServiceData(){
    this.api.getApiData().subscribe((res:any)=>{
    this.userData=res;
    console.log(res);
    })
  
   
  }
  
  postApiServicesData(){
    this.api.postApiData(this.userData).subscribe((res:any)=>{
      console.log(res);
    })
  }
  
  onsubmitData(data:any){
    this.userData.push(data.value)
    this.postApiServicesData()
  }
  

}
