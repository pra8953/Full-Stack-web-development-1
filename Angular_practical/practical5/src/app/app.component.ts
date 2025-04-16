import { CommonModule} from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  imports: [FormsModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Define the user object for two-way binding
  user = {
    name: '',
    email: '',
    password: ''
  };

  // Handle form submission
  onSubmit(form: any) {
    if (form.valid) {
      // If form is valid, show success message
      alert('Form Submitted Successfully!');
      console.log('Form Data: ', this.user);
    } else {
      // If form is invalid, show error message
      alert('Please fill out the form correctly.');
    }
  }
}
