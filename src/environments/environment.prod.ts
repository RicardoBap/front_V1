export const environment = {
  production: true,
  apiUrl: 'http://localhost:8080',

  tokenWhitelistedDomains: [ /localhost:8080/ ],
  tokenBlacklistedRoutes: [ /\/oauth\/token/ ]
};
