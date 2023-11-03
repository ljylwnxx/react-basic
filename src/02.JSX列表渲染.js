// 定义列表
const ancientPoetry = [
  { id: 1, name: '《岳阳楼记》', author: '陶渊明', dynasty: '东晋' },
  { id: 2, name: '《赤壁赋》', author: '苏轼', dynasty: '宋' },
  { id: 3, name: '《将进酒》', author: '李白', dynasty: '唐' }
]

function App () {
  return (
    <div className="App">
      <ul>
        {
          ancientPoetry.map((item, index) => {
            return (
              <li key={index.toString()}>
                {item.name}-{item.author}-{item.dynasty}
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default App
