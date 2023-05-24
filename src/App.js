import './app.css'
const showText = true

function App() {
return (
  <div className="App">
    <div className={ showText ? 'header': ''}>大家好，我是wnxx,现在做jsx类名动态类名控制</div>
  </div>
)
}

export default App