import React from 'react'

// 类组件的创建
class Introduction extends React.Component {
  render() {
    return (
      <div>
        <h1>大家好，我叫wnxx</h1>
        <h1>我今年3岁了</h1>
        <h1>类组件的创建和渲染</h1>
      </div>
    )
  }
}
// 类组件的渲染
function App() {
  return (
    <div className="App">
      <Introduction />
    </div>
  )
}

export default App
