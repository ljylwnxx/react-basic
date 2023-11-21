import { useState, useEffect } from 'react'
import { Button } from 'antd'

function App() {
  const [name, setName] = useState('pupu')
  const [age, setAge] = useState(10)

  useEffect(() => {
    console.log('默认副作用执行了')
  })

  useEffect(() => {
    console.log('空数组依赖项副作用执行了')
  }, [])

  useEffect(() => {
    console.log('依赖特定项副作用执行了')
    // console.log(name)
  }, [age])

  return (
    <div>
      <div className="name">
        <div>姓名：{name}</div>
        <Button type="primary" onClick={() => setName('wnxx')}>
          修改姓名按钮
        </Button>
      </div>
      <div className="age">
        <div>年龄：{age}</div>
        <Button type="primary" onClick={() => setAge(3)}>
          修改年龄按钮
        </Button>
      </div>
    </div>
  )
}
export default App
