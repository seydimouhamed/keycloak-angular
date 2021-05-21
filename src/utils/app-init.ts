import { KeycloakService } from 'keycloak-angular';
import { environment } from '../environments/environment';
 
export function initializer(keycloak: KeycloakService): () => Promise<any> {
    return (): Promise<any> => {
        return new Promise(async (resolve, reject) => {
          try {
            await keycloak.init({
                config: {
                    url: environment.keycloak.issuer,
                    realm: environment.keycloak.realm,
                    clientId: environment.keycloak.clientId
                },
                
              // * Change loadUserProfileStartUp false => true*
              loadUserProfileAtStartUp: true,
              initOptions: {
                onLoad: 'login-required',
                checkLoginIframe: true
              },
              // * ajout '/assets' *
              bearerExcludedUrls: ['/assets']
            });
            // * ajout 'resolve' *
            resolve(resolve);
          } catch (error) {
            reject(error);
          }
        });
      };
}