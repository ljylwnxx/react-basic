import React from 'react'

// 类组件的创建
class IntroductionComponent extends React.Component {
  // 定义组件状态
  state = {
    weight: 30,
    hobbies: ['旅游', '唱歌'],
    animals: {
      name: 'wnxx',
      age: 3,
    },
  }
  // 事件回调函数
  changeNameInput = (e) => {
    this.setState({
      animals: {
        ...this.state.animals,
        name: e.target.value,
      },
    })
  }

  changeAgeInput = (e) => {
    this.setState({
      animals: {
        ...this.state.animals,
        age: e.target.value,
      },
    })
  }

  changeWeightInput = (e) => {
    this.setState({
      weight: e.target.value,
    })
  }

  changeHobbiesInput = (e) => {
    this.setState({
      hobbies: e.target.value,
    })
  }
  render() {
    // 使用状态
    return (
      <div>
        <div className="name">
          大家好，我叫
          <input
            type="text"
            value={this.state.animals.name}
            onChange={this.changeNameInput}
          />
        </div>
        <div className="age">
          我今年
          <input
            type="text"
            value={this.state.animals.age}
            onChange={this.changeAgeInput}
          />
          岁了
        </div>
        <div className="weight">
          <div>
            我的体重为：
            <input
              type="text"
              value={this.state.weight}
              onChange={this.changeWeightInput}
            />
          </div>
        </div>
        <div className="hobbies">
          <div>
            我的爱好包括：
            <input
              type="text"
              value={this.state.hobbies}
              onChange={this.changeHobbiesInput}
            />
          </div>
        </div>
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
