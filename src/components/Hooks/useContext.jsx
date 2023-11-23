import React, { createContext, useState, useContext } from 'react'

const Context = createContext()
function ComponentA() {
  const name = useContext(Context)
  return (
    <div>
      这是组件A
      <span>这是从App传过来的数据:{name}</span>
      <ComponentB />
    </div>
  )
}

function ComponentB() {
  const name = useContext(Context)
  return (
    <div>
      这是组件B
      <span>这是从App传过来的数据:{name}</span>
    </div>
  )
}

function App() {
  const [name, setName] = useState('我叫wnxx')
  return (
    <Context.Provider value={name}>
      <div>
        <ComponentA />
        <button onClick={() => setName('我叫pupu')}>修改按钮</button>
      </div>
    </Context.Provider>
  )
}
export default App
