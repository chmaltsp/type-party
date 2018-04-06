interface Theme {
  colors: {
    [key: string]: string;
  };
}

export const theme: Theme = {
  colors: {
    black: '#000',
    greyDDD: '#DDD',
    white: '#FFF',
  },
};
export default theme;
