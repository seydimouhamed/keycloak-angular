import { Injectable } from '@angular/core';
import { KeycloakInstance } from 'keycloak-js';

@Injectable({
  providedIn: 'root'
})
export class AppService {
 public kc: KeycloakInstance;
  constructor()
  {
  }

  init(){
    console.log('Security Initialisation...');

  }
}
