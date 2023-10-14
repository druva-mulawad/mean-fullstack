import { Component } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import { RegisterService } from '../register.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  registrationData =new FormGroup({
    email:new FormControl(''),
    password: new FormControl('')
  })

  constructor(private registrationService: RegisterService){}

  register(){
    console.log(this.registrationData.value);

    this.registrationService.registerUser(this.registrationData.value).subscribe({complete:console.info});
    this.registrationService.registerUser(this.registrationData.value).subscribe({error:console.error});
    
    

    
  //Below snippet is deprecated method of showcasing the status  
  //   subscribe(
  //     (data) => {
  //       console.log('User registered successfully:',data);
  //     },
  //     (error) => {
  //       console.error('Error registering user:', error);
  //     }
  // )
  }

}
