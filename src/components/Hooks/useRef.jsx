import React, { useEffect, useRef } from 'react'

class UseRefComponent extends React.Component {
  render() {
    return <div>这是useRefComponent类组件</div>
  }
}

function App() {
  const componentRef = useRef(null)
  const nameRef = useRef(null)
  // useEffect是在dom渲染之后
  useEffect(() => {
    console.log(componentRef.current)
    console.log(nameRef.current)
  }, [])

  return (
    <div>
      {/* 获取组件实例 */}
      <UseRefComponent ref={componentRef} />
      {/* 获取dom */}
      <div ref={nameRef}>我叫wnxx</div>
    </div>
  )
}
export default App
