import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent {

  title = 'AngularDemo';
  public str: any;
  public link: any;
  public tar: any;
  public age: number = 10;
  public fname: string = "";


  constructor() {

    //string interpolation binding

    this.str = "Hello I am Angular";

    // Property/Attribute binding
    if (this.age > 15) {
      this.link = "https://www.tutorialspoint.com/angular8/angular8_data_binding.htm";
    } else {
      this.link = "https://www.google.com";
    }

    this.tar = "_blank";


  }
  // Event binding

  onClick() {
    console.log("this is click event");
  }



}
