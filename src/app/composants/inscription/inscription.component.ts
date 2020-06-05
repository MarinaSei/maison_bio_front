import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  //users: Array<User> = [];
  user: User = {};
  
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  inscription() {
    this.userService.addUser(this.user).subscribe(res => {
      this.router.navigateByUrl('/');
  });

  }

  // ajouterUser() {
  //   // this.users.push({...this.user});
  //   // console.log(this.users);
  // }

}
