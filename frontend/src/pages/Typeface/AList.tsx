import * as React from 'react';
import { GetTypeface_typeface_designers } from './__generated__/GetTypeface';
export const AList = ({ list }: { list: GetTypeface_typeface_designers[] }) => (
  <React.Fragment>
    {list.map((designer, index) => (
      <a key={designer.name} href={designer.url}>
        {designer.name}
        {index !== list.length - 1 && ', '}
      </a>
    ))}
  </React.Fragment>
);
