import { Link } from 'gatsby';
import React from 'react';
import './layout.sass';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  console.log('layout');
  return (
    <>
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
      {/* <footer>
        footer
      </footer> */}
    </>
  );
};

export default Layout;
