const yourIP = '192.168.1.36'; // See the docs https://docs.abp.io/en/abp/latest/Getting-Started-React-Native?Tiered=No
const port = 44370;
const apiUrl = `http://${yourIP}:${port}`;
const ENV = {
  dev: {
    apiUrl: apiUrl,
    oAuthConfig: {
      issuer: apiUrl,
      clientId: 'News_App',
      scope: 'offline_access News',
    },
    localization: {
      defaultResourceName: 'News',
    },
  },
  prod: {
    apiUrl: 'http://192.168.1.36:44370',
    oAuthConfig: {
      issuer: 'http://192.168.1.36:44370',
      clientId: 'News_App',
      scope: 'offline_access News',
    },
    localization: {
      defaultResourceName: 'News',
    },
  },
};

export const getEnvVars = () => {
  return __DEV__ ? ENV.dev : ENV.prod;
};
