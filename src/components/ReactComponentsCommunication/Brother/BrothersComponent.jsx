import React from 'react'

// 子组件A
function SonA({ msg }) {
  return (
    <div>
      SonA
      {msg}
    </div>
  )
}
// 子组件B
function SonB({ changeMsg }) {
  function handleClick() {
    changeMsg('我叫pupu')
  }
  return (
    <div>
      SonB
      <button onClick={handleClick}>改变信息按钮</button>
    </div>
  )
}

// 父组件
class App extends React.Component {
  // 父组件提供状态数据
  state = {
    message: '我叫wnxx',
  }
  // 父组件提供修改数据的方法
  changeMsg = (newMsg) => {
    this.setState({
      message: newMsg,
    })
  }

  render() {
    return (
      <>
        {/* 接收数据的组件 */}
        <SonA msg={this.state.message} />
        {/* 修改数据的组件 */}
        <SonB changeMsg={this.changeMsg} />
      </>
    )
  }
}

export default App
