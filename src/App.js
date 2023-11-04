
import React from 'react'

// 类组件的创建
class IntroductionComponent extends React.Component {
  // 定义组件状态
  state = {
    name: 'pupu',
    age: 3
  }
  // 事件回调函数
  changeName = () => {
    // 修改状态name
    this.setState({
      name: 'wnxx'
    })
  }
  changeAge = () => {
    this.setState({
      age: this.state.age + 1
    })
  }
  render () {
    // 使用状态
    return (
      <div>
        <h1>大家好，我叫{this.state.name}</h1>
        <h1>我今年{this.state.age}岁了</h1>
        <button onClick={this.changeName}>
          修改姓名按钮
        </button>
        <button onClick={this.changeAge}>
          修改年龄按钮
        </button>
      </div>
    )
  }
}

function App () {
  return (
    <div className="App">
      {/*类组件的渲染*/}
      <IntroductionComponent />
    </div>
  )
}

export default App
