import React from 'react'

function vinceLayout ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>{children}</div>
  );
}

export default vinceLayout