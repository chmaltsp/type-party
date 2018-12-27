import isWindowDefined from './isWindowDefined';

const TOKEN_KEY = 'tpt';

export const removeToken = () => localStorage.removeItem(TOKEN_KEY);

export const setToken = (jwt: string) => localStorage.setItem(TOKEN_KEY, jwt);

export const getToken = () => isWindowDefined && localStorage.getItem(TOKEN_KEY);
