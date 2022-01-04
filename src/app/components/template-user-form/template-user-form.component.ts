import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-user-form',
  templateUrl: './template-user-form.component.html',
  styleUrls: ['./template-user-form.component.scss'],
})
export class TemplateUserFormComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  userName: string = '';

  userAge = 0;

  goalsDesc = '';

  agreeTerms = '';

  learningPlan = '';

  registerUser(userForm: NgForm) {
    console.log(userForm.value);
  }

  resetData(userForm: NgForm) {
    userForm.reset();
  }

  setUserData(userForm: NgForm) {
    const user = {
      userName: 'set user from method',
      userAge: 25,
      goalsDesc: 'descript set by method',
      agreeTerms: 'true',
      learningPlan: 'Gold',
    };

    userForm.setValue(user);
  }
}
