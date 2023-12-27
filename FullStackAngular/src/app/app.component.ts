import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FullStackAngular';

  //for form validation
  onSubmit(form: NgForm) {
    // stop here if form is invalid
    if (form.invalid) {
        return;
    }

    alert('SUCCESS!! :-)\n\n' + JSON.stringify(form.value, null, 4));
}

}
