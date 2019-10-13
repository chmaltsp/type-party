import * as React from 'react';
import Link from '../Link';

interface LinkProps {
  slug: string;
  name: string;
}
interface LinkListProps {
  links: LinkProps[];
  hrefPrefix: string;
}

const LinkList: React.SFC<LinkListProps> = ({ links, hrefPrefix }) => {
  return (
    <React.Fragment>
      {links.map((link, index) => (
        <Link key={link.name} to={'/' + hrefPrefix + '/' + link.slug}>
          {link.name}
          {index !== links.length - 1 && ', '}
        </Link>
      ))}
    </React.Fragment>
  );
};

export default LinkList;
