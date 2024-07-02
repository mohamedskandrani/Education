import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signUpForm!: FormGroup
  signUp: any={};

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      firstName:['',Validators.required,Validators.minLength(3)],
      lastName:['',Validators.required,Validators.minLength(5)],
      email:['',Validators.required,Validators.email],
      age:['',Validators.required],
      address:['',Validators.required],
      pwd:['',Validators.required,Validators.minLength(5),Validators.maxLength(15)]
    })
  }
  signup(){
    console.log("here login object",this.signUp);
  }

}
