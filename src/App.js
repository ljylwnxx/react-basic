import { BrowserRouter, Routes, Route } from "react-router-dom"

import Layout from "./components/Router/NestedRoute/Layout"
import Login from "./components/Router/NestedRoute/Login"
import Board from "./components/Router/NestedRoute/Board"
import Article from "./components/Router/NestedRoute/Article"
import NotFound from "./components/Router/NestedRoute/NotFound"

function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          {/* 定义二级路由嵌套 */}
          {/* <Route path="board" element={<Board />}></Route> */}
          {/* 默认二级路由，添加index属性 把path干掉 */}
          <Route index element={<Board />}></Route>
          <Route path="article" element={<Article />}></Route>
        </Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App