import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from "rxjs/Subscription";
import { AngularFireAuth } from "angularfire2/auth";
import { Router } from "@angular/router";
import * as firebase from 'firebase/app';
import { FirebaseListObservable, AngularFireDatabase } from "angularfire2/database";
import { Password } from "app/models/password.model";
import { MdDialog, MdDialogConfig } from '@angular/material';
import { PasswordDialogComponent } from "app/password-dialog/password-dialog.component";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy{

  showSignOut = 'false';
  private authStateSubscription: Subscription;
  passwordStream: FirebaseListObservable<Password[]>;
  private firebasePath: string;

  constructor(private afAuth: AngularFireAuth, private router: Router, private db: AngularFireDatabase, private dialog: MdDialog) { }
  ngOnInit(): void {
    this.authStateSubscription = this.afAuth.authState.subscribe((user: firebase.User) =>{
      if(user){
        console.log("User has signed in as: ", user.uid);
        this.firebasePath = `/users/${user.uid}`;
        this.passwordStream = this.db.list(this.firebasePath);
      }
      else{
        console.log("User not signed in");
        this.router.navigate(["/signin"]);
      }
    });
  }

  showPasswordDialog(): void{
    console.log("show dialog");
    const dialogConfig = new MdDialogConfig();
    dialogConfig.data = {firebasePath: this.firebasePath};
    this.dialog.open(PasswordDialogComponent, dialogConfig);
  }

  ngOnDestroy(): void{
    this.authStateSubscription.unsubscribe();
  }

}
