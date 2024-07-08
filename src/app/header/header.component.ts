import { Token } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { jwtDecode } from 'jwt-decode';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  decoded:any;

  constructor() { }

  ngOnInit(): void {
   let token =sessionStorage.getItem('jwt')
   if (token) {
    this.decoded=jwtDecode(token)
    }
  }
  isLoggedIn(){
    let token =sessionStorage.getItem('jwt')
    if (token) {
      this.decoded=jwtDecode(token)
      
    }
    return !!!token
    

}}

// ngOnInit(): void {
//   let token=sessionStorage.getItem('jwt');
//   if (token) {
//     this.decoded=jwtDecode(token)
    
//   }
// }
// isLoggedIn(){
//   let token=sessionStorage.getItem('jwt');
//   if (token) {
//     this.decoded=jwtDecode(token)
    
//   }
//   return !!token
// }

// }
