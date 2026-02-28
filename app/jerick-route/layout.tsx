import React from 'react'

function JerickLayout({
    children,
    }: Readonly<{
        children: React.ReactNode;
    }>){
    return <div>{children}</div>
}

export default JerickLayout