import { Outlet } from "react-router-dom"

function Layout () {
  return (
    <div>
      这是layout页面📃
      {/* 二级路由出口 */}
      <Outlet />
    </div>
  )
}

export default Layout