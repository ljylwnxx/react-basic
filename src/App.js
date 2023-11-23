import React from "react"
import Home from './components/Router/Home'
import About from './components/Router/About'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'


function App () {
  return (
    <div>

      <BrowserRouter>
        <Link to="/">首页</Link>
        <Link to="/about">关于</Link>
        <Routes>
          <Route path='/' component={Home} />
          <Route path='/about' component={About} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App