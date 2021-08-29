import { Link } from 'gatsby';
import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import SEO from './seo';
import './layout.sass';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => (
  <>
    <SEO />
    <header>
      <div className="title">
        <Link to="/">Hojin&apos;s Note</Link>
      </div>
      <nav className="nav">
        <ul>
          <li>
            <Link to="/series">
              Series
            </Link>
          </li>
          {/* <li>
              <Link to="/contact">
                contact
              </Link>
            </li> */}
        </ul>
      </nav>
    </header>
    <main>
      {children}
    </main>
    <footer>
      <span>
        ⓒ 2021. (Jung Hojin) all rights reserved.
      </span>
      <span>
        {'Theme by '}
        <Link to="https://github.com/froggagul">
          froggagul
        </Link>
      </span>
      <span className="space" />
      <span className="right">
        <Link to="/rss.xml">
          rss
        </Link>
      </span>
      <span className="right">
        <Link to="/sitemap.xml">
          sitemap
        </Link>
      </span>
    </footer>
  </>
);

export default Layout;
