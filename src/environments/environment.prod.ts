export const environment = {
  production: true,
  apiUrl: 'https://salvavidas-api.herokuapp.com/', /*'https://salvavidas-api.herokuapp.com',*/

  tokenWhitelistedDomains: [ /localhost:8080/ ],
  tokenBlacklistedRoutes: [ /\/oauth\/token/ ]
};
