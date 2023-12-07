import NavBar from './components/NavBar'
import Menu from './components/Menu'
import FoodsCategory from './components/FoodsCategory'
import Cart from './components/Cart'

import foodsList from './mock/foodsList.json'
import './App.scss'

const App = () => {
  return (
    <div className="app">
      {/* 导航 */}
      <NavBar />
      {/* 内容 */}
      <div className="content-wrap">
        <div className="content">
          <Menu />
          <div className="list-content">
            <div className="goods-list">
              {/* 外卖商品列表 */}
              {foodsList.foodsList.map(item => {
                return (
                  <FoodsCategory
                    key={item.tag}
                    // 列表标题
                    name={item.name}
                    // 列表商品
                    foods={item.foods}
                  />
                )
              })}
            </div>
          </div>
        </div>
      </div>
      {/* 购物车 */}
      <Cart />
    </div>
  )
}

export default App
