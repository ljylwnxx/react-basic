import React from 'react'

// 函数式子组件
function SonAComponent({ name }) {
  return (
    <div>
      我是组件A---
      <span>接收到的数据：{name}</span>
    </div>
  )
}

function SonBComponent({ getNameMsg }) {
  const Msg = '我是来自B组件中的数据'
  // 调用父组件传递过来的回调函数
  function handleClick() {
    getNameMsg(Msg)
  }
  return (
    <div>
      我是组件B---
      <button onClick={handleClick}>点击按钮获取信息</button>
    </div>
  )
}

// 父组件
class App extends React.Component {
  state = {
    name: '我叫wnxx',
  }

  // 提供回调函数
  getNameMessage = (msg) => {
    console.log(msg)
    this.setState({
      name: msg,
    })
  }
  render() {
    return (
      <>
        <h1>我是父组件</h1>
        <div>
          {/*类组件的渲染*/}
          <SonAComponent name={this.state.name} />
          <SonBComponent
            // 传递给子组件
            getNameMsg={this.getNameMessage}
          />
        </div>
      </>
    )
  }
}
export default App
