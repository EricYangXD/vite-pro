export const environmentVariable = () => {
  const env = import.meta.env.VITE_APP_ANT;
  let parps;
  switch (env) {
    case 'dev':
      parps = 'dev';
      break;
    case 'alpha':
      parps = 'alpha';
      break;
    case 'preprod':
      parps = 'preprod';
      break;
    case 'prod':
      parps = 'prod';
      break;
    default:
      parps = 'dev';
      break;
  }
  return parps;
};
