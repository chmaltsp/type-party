declare global {
  interface Window {
    env: {
      [key: string]: string;
    };
  }
}
export const runtimeConfig =
  typeof window !== 'undefined'
    ? {
        // client
        apiUrl: window.env.RAZZLE_API_URL,
      }
    : {
        // server
        apiUrl: process.env.RAZZLE_API_URL,
      };
