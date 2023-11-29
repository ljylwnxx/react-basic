import { Input } from 'antd'
import './index.scss'

const { Search } = Input

const NavBar = () => {
  return (
    <div className="nav">
      <div className="menu">
        <div className="menu-item active">
          点菜<span className="menu-order"></span>
        </div>
        <div className="menu-item">
          评价<span className="menu-comment">1923</span>
        </div>
        <div className="menu-item">
          <span className="menu-business">商家</span>
        </div>
      </div>
      <div className="menu-search">
        <div className="menu-form">
          <Search placeholder="请输入菜品名称" style={{ width: 200 }} />
        </div>
      </div>
    </div>

  )
}

export default NavBar