
import HeaderComponent from '@/components/Header.component'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
  return (
    <>
    <div className="grid-background"></div>
    <main className='min-h-screen container'>
        <HeaderComponent/>
        <Outlet />
    </main>
    <div className="p-10 text-center bg-gray-800 mt-8"> made with love by sushil pandey</div>
   
    </>
  )
}

export default AppLayout