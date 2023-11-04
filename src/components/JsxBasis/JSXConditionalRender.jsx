// 定义布尔值
const flag = true
function App() {
  return (
    <div className="App">
      <div>
        {/* 条件渲染字符串 */}
        {flag ? '怒发冲冠，凭阑处' : '潇潇雨歇'}
      </div>
      <div>
        {/* 条件渲染标签/组件 */}
        {flag ? <span>到目前为止，你已经修复了所有的bug</span> : null}
      </div>
      <div>
        {/* 逻辑&&运算 */}
        {true && '你最优秀'}
      </div> 
    </div>
  )
}
export default App

// // 定义函数
// const getancientPoetry = (dynasty) =>{
//   if(dynasty === '唐') {
//      return <span>《将进酒》- 李白</span>
//   }
//   if(dynasty === '宋') {
//     return <span>《赤壁赋》- 苏轼</span>
//   }
//   if(dynasty === '东晋') {
//     return <span>《岳阳楼记》- 陶渊明</span>
//   }
// }

// function App() {
//   return (
//     <div className="App">
//       <div>
//         {getancientPoetry('唐')}
//       </div>
//       <div>
//         {getancientPoetry('宋')}
//       </div>
//       <div>
//         {getancientPoetry('东晋')}
//       </div> 
//     </div>
//   )
// }
// export default App