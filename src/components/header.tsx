import { Link } from 'gatsby';
import React, { FunctionComponent } from 'react';

type HeaderProps = {
  siteTitle: string;
};

export const Header: FunctionComponent<HeaderProps> = ({ siteTitle = '' }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`
      }}
    >
      <h1 className="center mh0 tc">
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
);
