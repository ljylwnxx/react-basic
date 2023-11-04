import React from 'react'

// 函数组件的创建
function Introduction() {
  // 函数组件回调函数
  const functionHandleClick = (e) => {
    e.preventDefault()
    console.log('函数组件被点击了', e)
  }
  return (
    <div>
      <h1>大家好，我叫wnxx</h1>
      <h1>我今年3岁了</h1>
      <button>
        <a href="http://www.baidu.com/" onClick={functionHandleClick}>
          阻止百度默认行为
        </a>
      </button>
    </div>
  )
}

// 类组件的创建
class IntroductionComponet extends React.Component {
  // 回调函数
  componentHandleClick = (e, msg) => {
    console.log('类组件被点击了', e, msg)
  }
  render() {
    return (
      <div>
        <h1>大家好，我叫wnxx</h1>
        <h1>我今年3岁了</h1>
        <button
          onClick={(e) => this.componentHandleClick(e, '我是一只可爱的动物')}>
          类组件按钮
        </button>
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
      <IntroductionComponet />
    </div>
  )
}

export default App
