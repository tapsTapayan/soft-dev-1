import React from 'react'

function RicaboRoute({
 children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      {children}
    </div>
  );
}

export default RicaboRoute
