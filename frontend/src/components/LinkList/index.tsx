import * as React from 'react';
import Link from '../Link';

interface LinkProps {
  slug: string;
  name: string;
}
interface LinkListProps {
  links: LinkProps[];
}

const LinkList: React.SFC<LinkListProps> = ({ links }) => {
  return (
    <React.Fragment>
      {links.map((link, index) => (
        <Link key={link.name} to={link.slug}>
          {link.name}
          {index !== links.length - 1 && ', '}
        </Link>
      ))}
    </React.Fragment>
  );
};

export default LinkList;
