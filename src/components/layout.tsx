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
              TAG
            </li>
            <li>
              SERIES
            </li>
            <li>
              CONTACT
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
