import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER, DoBootstrap, ApplicationRef } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { KeycloakService, KeycloakAngularModule } from 'keycloak-angular';
import { initializer } from '../utils/app-init';
import { AdminComponent } from './components/admin/admin.component';
import { AccessDeniedComponent } from './components/access-denied/access-denied.component';
import { ManagerComponent } from './components/manager/manager.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AdminComponent,
    AccessDeniedComponent,
    ManagerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    KeycloakAngularModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializer,
      deps: [ KeycloakService ],
      multi: true
    }
  ],
  // entryComponents: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

// export class AppModuled implements DoBootstrap{
//   constructor(private keycloakService: KeycloakService){}
//   ngDoBootstrap(appRef: ApplicationRef): void {
//     this.keycloakService.init()
//       .then(() => {
//         console.log('keycloak Success...');
//         appRef.bootstrap(AppComponent);
//       })
//       .catch((err) => {
//         console.log('keycloak error', err);
//       });
//   }
//  }
