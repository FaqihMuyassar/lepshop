import React from 'react'
import { Navigasibar } from './Navigasibar'

const AppShell = ({children}) => {
  return (
    <div>
        <Navigasibar />
        {children}
    </div>
  )
}

export default AppShell