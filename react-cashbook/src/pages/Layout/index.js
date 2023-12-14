import { Outlet, useNavigate } from "react-router-dom"
import { TabBar } from 'antd-mobile'
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { getCashList } from '@/store/modules/cashStore'
import {
  AddCircleOutline,
  BillOutline,
  CalculatorOutline,
} from "antd-mobile-icons"
import './index.scss'

const tabs = [
  {
    key: "/month",
    title: "月度账单",
    icon: <BillOutline />
  },
  {
    key: "/new",
    title: "记账",
    icon: <AddCircleOutline />
  },
  {
    key: "/year",
    title: "年度账单",
    icon: <CalculatorOutline />
  }
]


const Layout = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getCashList())
  }, [dispatch])
  // 切换路由实现
  const navigate = useNavigate()
  const switchRoute = (path) => {
    navigate(path)
  }
  return (
    <div className="layout">
      {/* 路由出口 */}
      <div className="container">
        <Outlet />
      </div>
      {/* 页脚 */}
      <div className="footer">
        <TabBar onChange={switchRoute}>
          {
            tabs.map(item => (<TabBar.Item key={item.key} icon={item.icon} title={item.title} />))
          }
        </TabBar>
      </div>
    </div>
  )
}
export default Layout