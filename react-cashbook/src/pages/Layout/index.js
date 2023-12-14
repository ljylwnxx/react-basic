import { Outlet } from "react-router-dom"
import { Button } from 'antd-mobile'
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { getCashList } from '@/store/modules/cashStore'


const Layout = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getCashList())
  }, [dispatch])
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