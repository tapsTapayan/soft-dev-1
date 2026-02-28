import React from 'react'

export default function stefannylayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <div>{children}</div>
  )
}
