import React from 'react'

function NashLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>
}

export default NashLayout