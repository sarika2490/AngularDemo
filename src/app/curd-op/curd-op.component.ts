import { Component } from '@angular/core';
import { CurdApiService } from '../service/curd-api.service';

@Component({
  selector: 'app-curd-op',
  templateUrl: './curd-op.component.html',
  styleUrls: ['./curd-op.component.css']
})
export class CurdOpComponent {
  public formData: any = [];
  public udata:any;
  constructor(private crud: CurdApiService) {
    this.getDataService();
    this.postDataService();
  /*   this.updateRecord() */
  }

  getDataService() {
    this.crud.getFormData().subscribe((res: any) => {
      this.formData = res;
      console.log(res);
      this.formData();
    })
  }
  postDataService() {
    this.crud.sendFormData(this.formData).subscribe((res: any) => {
      console.log(res)
    })

  }


  onSubmit(data: any) {
    this.formData.push(data.value);
    console.log(this.formData);
    this.postDataService();
  }
  delData(id: any) {
    console.log(id)
    this.crud.deleteId(id).subscribe((res: any) => {
      console.log(res);
      this.getDataService();
    })
  }
/*   updateRecord(){
   console.log(this.udata);
   this.udata.name ="Chelsey Dietrich";
   this.crud.updateData(this.udata).subscribe((res:any)=>{
    console.log(res)
   })
    

  } */

}
