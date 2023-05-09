import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { DirectivesComponent } from './directives/directives.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { TemplateFrmComponent } from './template-frm/template-frm.component';
import { DataServiceComponent } from './data-service/data-service.component';
import { HttpClientModule } from '@angular/common/http';
import { CrudComponent } from './crud/crud.component';
import { CurdOpComponent } from './curd-op/curd-op.component';
@NgModule({
  declarations: [
    AppComponent,
    DirectivesComponent,
    DatabindingComponent,
    TemplateFrmComponent,
    DataServiceComponent,
    CrudComponent,
    CurdOpComponent,
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
