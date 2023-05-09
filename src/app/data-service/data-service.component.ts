import { Component } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-data-service',
  templateUrl: './data-service.component.html',
  styleUrls: ['./data-service.component.css']
})
export class DataServiceComponent {
  public data: any;
  public senddata: any;
  public dataApi_stud: any;
  public formData: any ;

  constructor(private ds: DataService) {
    this.getStudData();
    this.sendStudData();
    this.getApiDataStud();
    this.submitForm()

  }
  getStudData() {
    //console.log(this.ds.getSampleData());
    this.data = this.ds.getSampleData();
  }

  sendStudData() {
    this.senddata = {
      FirstName: "Avani",
      LastName: "Shete",
      Email: "avani@gmail.com",
      Password: "SDHFFFF",
      Branch: "Comp",
      Gender: "Female"
    }
    this.ds.sendSampleStudData(this.senddata);

  }

  getApiDataStud() {
    this.ds.sendApiData().subscribe((res: any) => {
      this.senddata = res;
      //console.log(this.senddata);
    })
  }

  submitForm(){
    this.formData ={
      name: "Anil",
      job: "tester",
      age:12
    }
  this.ds.sendFormData(this.formData).subscribe((res:any)=>{
    console.log(res);
  })
  }

  /*  onSubmit(data: any) {
     console.log(data.value);
     this.ds.postApiData(data).subscribe((res: any) => {
       this.frmData = res;
       console.log(this.frmData);
     })
 
   } */
}
