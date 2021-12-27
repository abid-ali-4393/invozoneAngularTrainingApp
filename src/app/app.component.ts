import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'invozoneAngularTrainingApp';
  companyTitle:string  = "Hi Invozone from string interploation"
  isDisable = true;
  productDisc = "Product Discription here";
  red = "#FF0000";
  paraDesc = "para-desc";
  innerData = "This is property Binding data description"

  alertUser = ()=>{
    alert("You have binded an event with this button");
  }
  
}
