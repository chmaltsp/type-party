import isWindowDefined from './utils/isWindowDefined';

declare global {
  interface Window {
    env: {
      [key: string]: string;
    };
  }
}

export const runtimeConfig = isWindowDefined
  ? {
      // client
      apiUrl: window.env.apiUrl,
    }
  : {
      // server
      apiUrl: process.env.RAZZLE_API_URL,
    };
