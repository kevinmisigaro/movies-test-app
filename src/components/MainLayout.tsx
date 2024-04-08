import { ReactNode } from 'react'
import Navbar from './Navbar'

function MainLayout({children}: {children : ReactNode}) {
  return (
    <div>
        <Navbar/>
       <div className='px-20 pt-8'>
       {children}
       </div>
    </div>
  )
}

export default MainLayout