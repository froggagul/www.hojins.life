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
          <div>Hojin&apos;s Note</div>
        </div>
        <nav className="nav">
          <ul>
            <li>
              <Link to="/series">
                Series
              </Link>
            </li>
            <li>
              <Link to="/contact">
                contact
              </Link>
            </li>
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
