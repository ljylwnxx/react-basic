// 组件的定义
function Introduction() {
  return (
    <div>
      <h1>大家好，我叫wnxx</h1>
      <h1>我今年3岁了</h1>
      <h1>我是一只可爱的动物</h1>
    </div>
  )
}
// 组件的渲染
function App() {
  return (
    <div className="App">
      <Introduction />
    </div>
  )
}

export default App
