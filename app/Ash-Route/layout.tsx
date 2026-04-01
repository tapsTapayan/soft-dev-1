import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      {/* header/nav can go here */}
      <main>{children}</main>
      {/* footer if needed */}
    </>
  );
};

export default Layout;