import { Link } from 'gatsby';
import React from 'react';
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
            <Link to="https://dev.hojins.life">
              Portfolio
            </Link>
          </li>
          <li>
            <Link to="/series">
              Series
            </Link>
          </li>
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
      <span>
        <Link to="https://m.blog.naver.com/kcy0905a">
          ❤️
        </Link>
      </span>
      <span className="space" />
      <span className="right">
        <Link to="/rss.xml">
          rss
        </Link>
      </span>
      <span className="right">
        <Link to="/sitemap/sitemap-index.xml">
          sitemap
        </Link>
      </span>
    </footer>
  </>
);

export default Layout;
