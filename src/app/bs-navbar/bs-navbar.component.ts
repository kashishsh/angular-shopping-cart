import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase';
// When working with firebase, we should always unsubscribe to the observables.
// One way is to implement ngOnDestroy
@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit {
  user$: Observable<firebase.User>;
  constructor(private afAuth: AngularFireAuth) {
    this.user$ = this.afAuth.authState;
  }

  ngOnInit() {
  }
  logout() {
    this.afAuth.auth.signOut();
  }

}
