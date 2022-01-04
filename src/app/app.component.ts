import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // Data Binding Practice
  title = 'invozoneAngularTrainingApp';

  companyTitle: string = 'Hi Invozone from string interploation';

  isDisable = true;

  productDisc = 'Product Discription here';

  red = '#FF0000';

  paraDesc = 'para-desc';

  innerData = 'This is property Binding data description';

  alertUser = () => {
    alert('You have binded an event with this button');
  };

  // Directives Code
  classDirDesc = 'This is heading to present ngClass Directive Description';

  classDirNames = ' backgrounds fonts';

  styleDirName = "{'background-color':pink, 'color':red, 'height':200px, 'width':100%}";

  // pipes code

  userName = 'Abid Ali';

  userEmail = 'test@gmail.com';

  salary = 2342;

  dob = '10-12-2013';

  // Directives code
  divClass = 'backgrounds fonts';

  loginType = true;

  userType = 'employee';

  items = ['user 1', 'user 2', 'user 3', 'user 4', 'user 5'];
}
