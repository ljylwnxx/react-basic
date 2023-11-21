import { useState, useEffect } from 'react'
import { Button } from 'antd'

function Test() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCount(count + 1)
      console.log('定时器执行了')
    }, 1000)
    return () => {
      // 用来清理副作用的事情
      clearInterval(timer)
    }
  }, [count])

  return <div>{count}</div>
}

function App() {
  const [flag, setFlag] = useState(true)
  return (
    <div>
      {flag ? <Test /> : null}
      <Button onClick={() => setFlag(!flag)}>显示隐藏按钮</Button>
    </div>
  )
}
export default App
