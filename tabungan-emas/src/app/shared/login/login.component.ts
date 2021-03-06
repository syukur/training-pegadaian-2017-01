import { Component, OnInit } from '@angular/core';
import { Router }   from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'login-form',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  username: string = "user001";
  password: string = "u00123";

  constructor(private authService : AuthService, private router : Router) { }

  ngOnInit() {
  }

  login() : void {
	  console.log("Username : "+this.username);
	  console.log("Password : "+this.password);
	  this.authService.login(this.username, this.password)
	  .then(sukses => {
		  if(sukses) {
			  this.router.navigate(['/']);
		  } else {
			  console.log("Login gagal");
		  }
	  });
  }
}
