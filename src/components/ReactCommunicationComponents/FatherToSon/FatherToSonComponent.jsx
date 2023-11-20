import React from 'react'

// 函数式子组件
function SonFunctionComponent({ weight, hobbies, animals, getMsg }) {
  return (
    <div>
      我是函数子组件
      <div>姓名：{animals.name}</div>
      <div>年龄：{animals.age}岁</div>
      <div>体重：{weight}</div>
      <div>
        爱好：
        {hobbies.map((item) => (
          <span key={item}>{item + ' '}</span>
        ))}
      </div>
      <button onClick={getMsg}>点击按钮获取信息</button>
    </div>
  )
}
// 类子组件
class SonClassComponent extends React.Component {
  render() {
    return (
      <div>
        {' '}
        我是类子组件
        <div>姓名：{this.props.animals.name}</div>
        <div>年龄：{this.props.animals.age}</div>
        <div>体重：{this.props.weight}</div>
        <div>
          爱好：
          {this.props.hobbies.map((item) => (
            <span key={item}>{item + ' '}</span>
          ))}
        </div>
        <div>{this.props.child}</div>
        <button onClick={this.props.getMsg}>点击按钮获取信息</button>
      </div>
    )
  }
}
// 父组件
class App extends React.Component {
  // 准备数据
  state = {
    weight: 30,

    hobbies: ['旅游', '唱歌'],

    animals: {
      name: 'wnxx',

      age: 3,
    },
  }
  getMsg = () => {
    console.log('父组件的函数', this.state)
  }
  render() {
    return (
      <>
        <h1>我是父组件</h1>
        <div>
          {/*类组件的渲染*/}
          <SonFunctionComponent
            weight={this.state.weight}
            hobbies={this.state.hobbies}
            animals={this.state.animals}
            getMsg={this.getMsg}
          />
          <SonClassComponent
            weight={this.state.weight}
            hobbies={this.state.hobbies}
            animals={this.state.animals}
            getMsg={this.getMsg}
            child={<span>this is child</span>}
          />
        </div>
      </>
    )
  }
}
export default App
