import { Outlet } from "react-router-dom"
import { Button } from 'antd'
const Layout = () => {
  return (
    <div>
      <Outlet />
      layout
      <Button color='primary'>ceshi</Button>
      <div className='purple-theme'>
        <Button color='primary'>ceshi</Button>
      </div>
    </div>
  )
}
export default Layout