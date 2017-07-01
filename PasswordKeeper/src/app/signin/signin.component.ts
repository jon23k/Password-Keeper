import { Component, OnInit } from '@angular/core';
import 'rosefire';
import { AngularFireAuth } from "angularfire2/auth";
import { environment } from "environments/environment";
import {Router} from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss', '../shared/common.scss']
})
export class SigninComponent implements OnInit {
constructor(private afAuth: AngularFireAuth, private router: Router) { }
  ngOnInit() {
  }

  signInWithRoseFire(): void{
    console.log("TODO: Sign in with Rosefire");
    Rosefire.signIn(environment.rosefireRegistryToken, (error, rfUser: RosefireUser) => {
      if (error) {
        // User not logged in!
        console.error(error);
        return;
      }
      console.log("rosefire is done. rfUser: ", rfUser);
      this.afAuth.auth.signInWithCustomToken(rfUser.token).then((authState) => {
        console.log("signing in is done. rfUser: ", authState);
        this.router.navigate(["/"]);
      });

    });
  }

}
