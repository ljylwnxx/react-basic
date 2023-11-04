const styleObj = {
    color: 'green',
    fontSize: '20px'
  }
  
  function App() {
  return (
    <div className="App">
      <div style={ styleObj }>大家好，我是wnxx,现在做jsx行内样式处理</div>
    </div>
  )
  }
  
  export default App

//   App.css
// .header {
//     color: blue;
//     font-size: 20px;
// }

// app.js
// import './app.css'

// function App() {
// return (
//   <div className="App">
//     <div className="header">大家好，我是wnxx,现在做jsx类名样式处理</div>
//   </div>
// )
// }

// export default App

// jsx类名动态类名控制

// import './app.css'
// const showText = true

// function App() {
// return (
//   <div className="App">
//     <div className={ showText ? 'header': ''}>大家好，我是wnxx,现在做jsx类名动态类名控制</div>
//   </div>
// )
// }

// export default App