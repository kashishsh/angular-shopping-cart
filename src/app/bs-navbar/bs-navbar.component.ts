import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase';
import { AuthService } from './../auth.service';
// When working with firebase, we should always unsubscribe to the observables.
// One way is to implement ngOnDestroy
@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit {
  constructor(public auth: AuthService) {
  }

  ngOnInit() {
  }
  logout() {
    this.auth.logout();
  }

}
