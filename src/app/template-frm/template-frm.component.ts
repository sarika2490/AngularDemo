import { Component } from '@angular/core';

@Component({
  selector: 'app-template-frm',
  templateUrl: './template-frm.component.html',
  styleUrls: ['./template-frm.component.css']
})
export class TemplateFrmComponent {
  public allData: any = [];
  public course: any = ["comp", "IT", "ENTC", "Mech"];
  public showFlag: boolean = false;
  public count: number = 1;
  public fn:any="";
  public ln:any="";
  public em:any="";
  public ps:any="";
  public cps:any="";
  public cr:any="";
  public gn:any="";
  public hiddenId: any = "";


  onSubmit(data: any) {

    //console.log(data.value);
    data.value.id = this.count;
    this.allData.push(data.value);
    if (this.allData.length > 0) {
      this.showFlag = true;
      
      //console.log(data.value);
    }
    this.count++;
    //console.log(this.allData);
  }

  
  
  onDel(data: any) {
      this.allData.forEach((ele: any, index: any) => {
      if (ele.id == data.id) {
        /* console.log(data.value); */
        this.allData.splice(index, 1);
      }

    })
    

  }
  onUpdate(data:any){
    this.fn = data.fname;
    this.ln = data.lname;
    this.em = data.email;
    this.ps = data.Password;
    this.cps = data.cPassword;
    this.cr = data.course;
    this.gn = data.gender;
    this.hiddenId = data.id;
    console.log(data)
    
  }

  onUp(data:any){
    this.allData.forEach((ele:any)=>{
      if(data.value.id == ele.id){
        console.log(data.value)
        ele.fname = data.value.fname;
        ele.lname = data.value.lname;
        ele.email = data.value.email;
        ele.password = data.value.password;
        ele.cPassword = data.value.cPassword;
        ele.course = data.value.course;
        ele.gender = data.value.gender;
      }
    });
  }
  }





