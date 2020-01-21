import * as React from 'react';
import { GetTypeface_typeface_designers } from './__generated__/GetTypeface';

interface ListItem {
  name: string;
  url: string;
}
export const AList = ({ list }: { list: ListItem[] }) => (
  <React.Fragment>
    {list.map((designer, index) => (
      <a key={designer.name} href={designer.url}>
        {designer.name}
        {index !== list.length - 1 && ', '}
      </a>
    ))}
  </React.Fragment>
);
