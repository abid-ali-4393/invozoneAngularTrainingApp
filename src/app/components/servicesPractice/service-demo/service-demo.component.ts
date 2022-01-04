import { Component, OnInit } from '@angular/core';
import { DemoService } from '../../../services/demo.service';
import { UsersService } from '../../../services/user/users.service';

@Component({
  selector: 'app-service-demo',
  templateUrl: './service-demo.component.html',
  styleUrls: ['./service-demo.component.scss'],
})
export class ServiceDemoComponent implements OnInit {
  users: any;
  backendUsers: any;
  constructor(
    private demoService: DemoService,
    private userService: UsersService
  ) {}

  ngOnInit(): void {
    this.users = this.demoService.getUsers();

    this.backendUsers = this.userService.getUsersFromServer();
    console.log(this.backendUsers);
  }
}
