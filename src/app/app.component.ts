import { Component, HostListener, OnInit } from '@angular/core';
import { AuthenticationService } from './_services/authentication.service';
import { Router, ActivatedRoute   } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'elearning';
  first_name?:any;
  last_name?:any;
  email?:any;
  logedIn:boolean=false
  openProfaile:boolean=false;
  constructor(
    private _AuthenticationService:AuthenticationService,
    private _Router:Router,
    private _Route:ActivatedRoute,
  ){

  }
  ngOnInit(): void {
    if(localStorage.getItem('currentUser')){
      this.logedIn=true
    }else{
      this.logedIn=false
      
    }
    this.email=JSON.parse(localStorage.getItem('currentUser')!).emai
    this.first_name=JSON.parse(localStorage.getItem('currentUser')!).first_name
    this.last_name=JSON.parse(localStorage.getItem('currentUser')!).last_name

    console.log(JSON.parse(localStorage.getItem('currentUser')!));
    
  }
  togilProfaile(){
    if(this.openProfaile==false){
      this.openProfaile=true
    }else{
      this.openProfaile=false
    }
  }
  goToHome(){
    this._Router.navigateByUrl('/')
  }
  logout(){
    this._AuthenticationService.logout()
  }

}
