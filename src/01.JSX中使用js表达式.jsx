// 1.识别常规的变量
const name = 'wnxx'
// 2.原生js方法调用
const getAge = () => {
    return 3
}
// 3.三元运算符
const flag = true
function App() {
  return (
    <div className="App">
      <h1>大家好，我叫{name}</h1> 
      <h1>我今年{getAge()}岁了</h1> 
      <h1>我是一只{flag ? '可爱' : '丑陋'}的动物</h1> 
    </div>
  );
}

export default App;