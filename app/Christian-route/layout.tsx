import React from 'react'

interface LayoutProps {
  children: React.ReactNode
}

const ChristianLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      {children}
    </div>
  )
}

export default ChristianLayout
