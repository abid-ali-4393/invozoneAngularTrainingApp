import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-reactive-user-form',
  templateUrl: './reactive-user-form.component.html',
  styleUrls: ['./reactive-user-form.component.scss'],
})
export class ReactiveUserFormComponent implements OnInit {
  addUserForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    //  this.addUserForm = new FormGroup({
    //   'userName':new FormControl(),
    //   'userEmail':new FormControl(),
    //   'userPhone':new FormControl(),
    //   'userAddress': new FormControl()

    // })

    this.addUserForm = this.fb.group({
      userName: new FormControl('', Validators.required),
      userEmail: new FormControl('', Validators.email),
      userPhone: new FormControl('', [
        Validators.minLength(5),
        Validators.maxLength(15),
      ]),
      userAddress: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(7),
          Validators.maxLength(25),
        ]),
      ),
    });

    // const setValueObj = {
    //   'userName': 'Name of the user',
    //   "userEmail": 'Email of the user set',
    //   'userPhone':'12341234',
    //   'userAddress': 'street 42, set using method',

    // }

    // this.addUserForm.setValue(setValueObj)

    // const patchValueObj = {
    //   'userName': 'Name of the user',
    //   "userEmail": 'Email of the user patch',

    // }
    // this.addUserForm.patchValue(patchValueObj);

    // console.log(this.addUserForm.value);
    // console.log(this.addUserForm.get('userName').value);
    // this.addUserForm.valueChanges.subscribe(data =>{
    //   console.log(data);

    // });
  }

  addData() {
    // console.log(this.addUserForm.value);
  }
}
