import NavBar from './components/NavBar'

const App = () => {
  return (
    <div className="App">
      {/* 导航 */}
      <NavBar />
      {/* 内容 */}
      <div className="content-wrap">
        <div className="goods-list">
          {/* 外卖商品列表 */}
        </div>
      </div>
      {/* 购物车 */}

    </div>
  )
}

export default App
