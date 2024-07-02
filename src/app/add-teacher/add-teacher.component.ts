import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeachersService } from '../services/teachers.service';
import { FormBuilder, FormGroup, RequiredValidator, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-teacher',
  templateUrl: './add-teacher.component.html',
  styleUrls: ['./add-teacher.component.css']
})
export class AddTeacherComponent implements OnInit {
  teacher:any={};
  teacherForm!:FormGroup


  constructor(
    private router:Router,
    private teacherService:TeachersService,
    private formBuilder:FormBuilder
  ) { }

  ngOnInit(): void {
    this.teacherForm=this.formBuilder.group({
      name:['',[Validators.required]],
      speciality:['',[Validators.required]],
      experience:['',[Validators.required]],
    })
  }
  addteacher(){
    this.teacherService.addteacher(this.teacher).subscribe((response)=>{
      console.log('this is response from BE',response);
      this.router.navigate(['admin'])
    })
  }

}
