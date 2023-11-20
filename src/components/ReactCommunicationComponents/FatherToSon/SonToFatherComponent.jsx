import React from 'react'

// 函数式子组件
function SonFunctionComponent(props) {
  const { name, getMsg } = props
  function handleClick() {
    // 调用父组件传递过来的回调函数 并注入参数
    getMsg('pupu')
  }
  return (
    <div>
      我是函数子组件
      <div>我的名字叫{name}</div>
      <button onClick={handleClick}>点击按钮获取信息</button>
    </div>
  )
}

// 父组件
class App extends React.Component {
  // 准备数据
  state = {
    name: 'wnxx',
  }
  // 提供回调函数
  changeMessage = (newName) => {
    this.setState({
      name: newName,
    })
    console.log('来自子组件的数据', newName)
  }
  render() {
    return (
      <>
        <h1>我是父组件</h1>
        <div>
          {/*类组件的渲染*/}
          <SonFunctionComponent
            name={this.state.name}
            // 传递给子组件
            getMsg={this.changeMessage}
          />
        </div>
      </>
    )
  }
}
export default App
