import Home from './components/Router/RouterBasic/Home'
import About from './components/Router/RouterBasic/About'
import Login from './components/Router/RouterBasic/Login'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'

// 进行路由配置
function App () {
  return (
    // 声明当前使用一个非hash模式路由
    <BrowserRouter>
      {/* 指定跳转的组件 to用来配置路由地址 */}
      <Link to="/">首页</Link>
      <Link to="/about">关于</Link>
      {/* 路由出口 路由对应的组件进行渲染 */}
      <Routes>
        {/* 指定路径和组件 */}
        <Route path='/' element={<Home />} />
        {/* <Route path='/about' element={<About />} /> */}
        <Route path='/about/:id' element={<About />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App