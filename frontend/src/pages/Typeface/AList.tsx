import * as React from 'react';
import { LinkA } from '../../components/Link';
interface ListItem {
  name: string;
  url: string;
}
export const AList = ({ list }: { list: ListItem[] }) => (
  <React.Fragment>
    {list.map((designer, index) => (
      <LinkA key={designer.name} href={designer.url}>
        {designer.name}
        {index !== list.length - 1 && ', '}
      </LinkA>
    ))}
  </React.Fragment>
);
