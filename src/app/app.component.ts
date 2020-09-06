import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Sample of Template Driven Form with Angular Version' + VERSION.major;

  register(registrationForm){
    console.log(registrationForm.value,"registered")
  }
}
