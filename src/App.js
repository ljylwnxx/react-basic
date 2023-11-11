import React from 'react'

// 类组件的创建
class IntroductionComponent extends React.Component {
  // 定义组件状态
  state = {
    weight: 30,
    hobbies: ['旅游', '唱歌'],
    animals: {
      name: 'wnxx',
      age: 3
    }
  }
  // 事件回调函数
  changeHobbiesState = () => {
    // 修改状态爱好
    // 数组修改添加 
    this.setState({
      hobbies: [...this.state.hobbies, '画画', '跳舞']
    })
  }
  changeRemoveHobbiesState = () => {
    // 修改状态爱好
    // 数组修改删除 
    this.setState({
      hobbies: this.state.hobbies.filter((item) => item !== '唱歌')
    })
  }
  changeAnimalsState = () => {
    // 修改状态animals
    // 对象修改
    this.setState({
      animals: {
        ...this.state.animals,
        name: 'pupu',
        age: 6
      }
    })
  }
  changeWeightState = () => {
    // 修改状态weight
    this.setState({
      weight: this.state.weight + 5
    })
  }
  changeAgeState = () => {
    this.setState({
      age: this.state.age + 1
    })
  }
  render () {
    // 使用状态
    return (
      // 幽灵标签
      <>
        <div className='animals'>
          <div className='name'>
            大家好，我叫{this.state.animals.name}
          </div>
          <div className='age'>
            我今年{this.state.animals.age}岁了
          </div>
          <button onClick={this.changeAnimalsState}>
            点击按钮修改姓名
          </button>
        </div>
        <div className='hobbies'>
          我的爱好包括以下：
          <ul>
            {
              this.state.hobbies.map(
                (item) => <li key={item}>
                  {item}
                </li>
              )
            }
          </ul>
          <button onClick={this.changeHobbiesState}>
            点击按钮添加爱好
          </button>
          <button onClick={this.changeRemoveHobbiesState}>
            点击按钮删除爱好
          </button>
        </div>
        <div className='weight'>
          <div>
            我的体重为： {this.state.weight}
          </div>
          <button onClick={this.changeWeightState}>
            点击按钮增加体重
          </button>
        </div>
      </>
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
