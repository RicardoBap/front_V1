export const environment = {
  production: true,
  apiUrl: 'http://localhost:8080', /*'https://salvavidas-api.herokuapp.com',*/

  tokenWhitelistedDomains: [ /localhost:8080/ ],
  tokenBlacklistedRoutes: [ /\/oauth\/token/ ]
};
