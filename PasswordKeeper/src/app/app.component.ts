import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  showSignOut = 'false';

  signOut(): void{
    console.log("signing out the user");
    
  };
}
