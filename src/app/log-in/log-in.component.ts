import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  loginForm!: FormGroup;
  login: any={};

  constructor() { }

  ngOnInit(): void {
  }
  addForm(){
    console.log("here login object",this.login);
  }

}
