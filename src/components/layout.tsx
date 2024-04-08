import { ReactNode } from 'react'
import Navbar from './navbar'

function Layout({children}: {children : ReactNode}) {
  return (
    <div>
        <Navbar />
       <div className='px-20 pt-8'>
       {children}
       </div>
    </div>
  )
}

export default Layout