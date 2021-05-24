import { KeycloakService } from 'keycloak-angular';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'keycloak test with springboot';
  constructor(private keycloakService: KeycloakService) {}
  logout() {
    this.keycloakService.logout();
  }
  affichertoken() {
    console.log(this.keycloakService.getToken());
  }
}
