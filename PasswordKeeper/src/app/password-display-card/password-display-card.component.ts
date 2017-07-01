import { Component, OnInit, Input } from '@angular/core';
import { Password } from "app/models/password.model";
import { MdSnackBar, MdDialog, MdDialogConfig } from "@angular/material";
import * as firebase from 'firebase/app';
import { PasswordDialogComponent } from "app/password-dialog/password-dialog.component";

@Component({
  selector: 'app-password-display-card',
  templateUrl: './password-display-card.component.html',
  styleUrls: ['./password-display-card.component.scss', '../shared/common.scss']
})
export class PasswordDisplayCardComponent implements OnInit {
  @Input() password: Password; 
  @Input() firebasePath: string;
  isExpanded= false;

  constructor(private snackBar : MdSnackBar, private dialog: MdDialog) { }
  ngOnInit() {
  }

  edit(): void{
    console.log("edit");
    const dialogConfig = new MdDialogConfig();
    dialogConfig.data= {
      firebasePath: this.firebasePath,
      password: this.password,
    }
    this.dialog.open(PasswordDialogComponent, dialogConfig);
  }

  delete(): void{
    console.log("delete");
    firebase.database().ref(this.firebasePath).child(this.password.$key).remove();
    this.snackBar.open("Password Removed!", "Dismiss",{
      duration: 3000,
    });
  }
}