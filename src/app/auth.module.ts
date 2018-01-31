import { NgModule } from '@angular/core';

import { Angular2SocialLoginModule } from "angular2-social-login";

 
let providers = {
    "google": {
      "clientId": "399657245913-joim60qml9m8btpfsjuk701acuusl0au.apps.googleusercontent.com"
    },
    "linkedin": {
      "clientId": "LINKEDIN_CLIENT_ID"
    },
    "facebook": {
      "clientId": "FACEBOOK_CLIENT_ID",
      "apiVersion": "<version>" //like v2.4 
    }
  };
 
@NgModule({
  imports: [ 
    Angular2SocialLoginModule
  ]
})
export class AuthModule { 
  constructor(){}
}
 
Angular2SocialLoginModule.loadProvidersScripts(providers);