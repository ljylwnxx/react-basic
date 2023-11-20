import React, { createContext } from 'react'
// 1. 创建Context对象
const { Provider, Consumer } = createContext()
function ComponentA() {
  return (
    <div>
      我是组件A
      <ComponentC />
    </div>
  )
}
// 3. 通过Consumer使用数据
function ComponentC() {
  return (
    <div>
      我是组件C---
      <Consumer>{(value) => <span>{value}</span>}</Consumer>
    </div>
  )
}
// 2. 提供数据
class App extends React.Component {
  state = {
    name: '我叫wnxx',
  }

  render() {
    return (
      <Provider value={this.state.name}>
        <div>
          <ComponentA />
        </div>
      </Provider>
    )
  }
}
export default App
