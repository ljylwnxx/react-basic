import React, { createRef } from 'react'

// 类组件的创建
class IntroductionComponent extends React.Component {
  nameRef = createRef()
  ageRef = createRef()
  weightRef = createRef()
  hobbiesRef = createRef()

  // 事件回调函数
  getInputValue = () => {
    console.log('姓名：', this.nameRef.current.value)
    console.log('年龄: ', this.ageRef.current.value)
    console.log('体重: ', this.weightRef.current.value)
    console.log('爱好: ', this.hobbiesRef.current.value)
  }

  render() {
    // 使用状态
    return (
      <div>
        <div>你好，请如实填写以下信息：</div>
        <div className="name">
          姓名：
          <input type="text" ref={this.nameRef} />
        </div>
        <div className="age">
          年龄：
          <input type="text" ref={this.ageRef} />
        </div>
        <div className="weight">
          体重：
          <input type="text" ref={this.weightRef} />
        </div>
        <div className="hobbies">
          爱好：
          <input type="text" ref={this.hobbiesRef} />
        </div>
        <button onClick={this.getInputValue}>点击按钮获取输入框的值</button>
      </div>
    )
  }
}

function App() {
  return (
    <div className="App">
      {/*类组件的渲染*/}
      <IntroductionComponent />
    </div>
  )
}

export default App
