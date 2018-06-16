// these sizes are arbitrary and you can set them to whatever you wish
import { css } from './';

const sizes = {
  giant: 1170,
  // tslint:disable-next-line:object-literal-sort-keys
  desktop: 992,
  tablet: 768,
  phone: 376,
};

interface Media {
  giant?: any;
  desktop?: any;
  tablet?: any;
  phone?: any;
}

// iterate through the sizes and create a media template
export const media: Media = Object.keys(sizes).reduce(
  (accumulator: Media, label: string) => {
    // use em in breakpoints to work properly cross-browser and support users
    // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
    const emSize = sizes[label] / 16;
    accumulator[label] = (templateStrings: any, ...args: any[]) => css`
    @media (max-width: ${emSize}em) {
      ${css(templateStrings, ...args)}
    }
  `;
    return accumulator;
  },
  {}
);
