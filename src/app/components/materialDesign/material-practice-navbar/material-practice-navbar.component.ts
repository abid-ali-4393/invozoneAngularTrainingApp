/**
 * Author: Abid Ali
 * This component contains practice for: Navbar, Sidenav, Menu, List, Grid
 * List, Expansion Panel, Cards, Tabs, Stepper
 */

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-material-practice-navbar',
  templateUrl: './material-practice-navbar.component.html',
  styleUrls: ['./material-practice-navbar.component.scss'],
})
export class MaterialPracticeNavbarComponent implements OnInit {
  sidenavFlag = false;
  public isAdmin = false;
  selectedTech = '';

  tabChangeHandler(index) {
    console.log('Tab Change custom Handler');
    console.log(index);
  }

  constructor() {
    // empty
  }

  ngOnInit(): void {
    // empty
  }
}
