# Examen Patisserie 

1. Terminez l'application en créant un CRUD complet pour les patisseries

2. Créez maintenant une page d'authentification afin de sécuriser l'accès au CRUD, créez un service AuthService

3. Créez une page de jeu pour gagner des patisserie

4. Mettez en place sur l'API la sécurisation des routes avec **JSONWEBTOKEN** ainsi que dans l'application

Indications : 

installez sur le serveur API du cours les dépendances suivantes :

```text
npm install dotenv 
npm install jsonwebtoken
npm install cookie-parser 
npm install --save-dev @types/cookie-parser
```

Vous devez mettre la clé secrète dans le fichier .env 

Utilisez les deux objets suivant de **jsonwebtoken** pour l'authentification ainsi que **HttpInterceptor** pour renvoyer le token à l'API

```js
import { sign, verify } from 'jsonwebtoken';
```

Côté Angular utilisez localStorage pour récupérez le cookie token de l'authentification, c'est l'API qui renvoie le token à l'application front.

```ts
import { AuthService } from '../auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private auth: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    // Get the auth token from the service.
    const authToken = this.auth.getAuthorizationToken();

    // Clone the request and replace the original headers with
    // cloned headers, updated with the authorization.
    const authReq = req.clone({
      headers: req.headers.set('Authorization', authToken)
    });

    // send cloned request with header to the next handler.
    return next.handle(authReq);
  }
}
```

Pour les questions suivantes créez des branches spécifiques 

5. (facultatif) Créez un module et un service spécifique à ce module pour mettre la logique du jeu à l'intérieur de ce module (refactorisation)

6. (facultatif) Utilisez MongoDB pour la persistance des données.


Remarques : créez un dépôt et expliciter chaque point qui vous semble pertinent dans le déploiement de l'application. 