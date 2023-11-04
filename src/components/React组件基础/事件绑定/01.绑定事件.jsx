import React from 'react'

// 函数组件的创建
function Introduction() {
  // 函数组件回调函数
  const functionHandleClick = () => {
    console.log('函数组件被点击了')
  }
  return (
    <div>
      <h1>大家好，我叫wnxx</h1>
      <h1>我今年3岁了</h1>
      <h1>我是一只可爱的动物</h1>
      <button onClick={functionHandleClick}>函数组件按钮</button>
    </div>
  )
}

// 类组件的创建
class IntroductionComponent extends React.Component {
  // 回调函数
  componentHandleClick = () => {
    console.log('类组件被点击了')
  }
  render() {
    return (
      <div>
        <h1>大家好，我叫wnxx</h1>
        <h1>我今年3岁了</h1>
        <button onClick={this.componentHandleClick}>类组件按钮</button>
      </div>
    )
  }
}

function App() {
  return (
    <div className="App">
      {/*函数组件的渲染*/}
      <Introduction />
      {/*类组件的渲染*/}
      <IntroductionComponent />
    </div>
  )
}

export default App
