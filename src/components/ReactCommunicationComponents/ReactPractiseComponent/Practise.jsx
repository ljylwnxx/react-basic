import React from 'react'

// 渲染列表
function AncientPoetryList({ list, delAncientPoetry }) {
  function handleClick() {
    delAncientPoetry(list.id)
  }
  return (
    <div>
      <div>
        <div>古诗名：{list.name} </div>
        <div>作者： {list.author}</div>
        <div>朝代：{list.dynasty}</div>
      </div>
      <button onClick={handleClick}>删除按钮</button>
    </div>
  )
}

// 数据提供者
class App extends React.Component {
  state = {
    ancientPoetry: [
      { id: 1, name: '《岳阳楼记》', author: '陶渊明', dynasty: '东晋' },
      { id: 2, name: '《赤壁赋》', author: '苏轼', dynasty: '宋' },
      { id: 3, name: '《将进酒》', author: '李白', dynasty: '唐' },
    ],
  }
  // 提供回调函数
  delAncientPoetry = (id) => {
    this.setState({
      ancientPoetry: this.state.ancientPoetry.filter((item) => item.id !== id),
    })
  }

  render() {
    return (
      <div>
        {this.state.ancientPoetry.map((item) => (
          <AncientPoetryList
            key={item.id}
            list={item}
            delAncientPoetry={this.delAncientPoetry}
          />
        ))}
      </div>
    )
  }
}
export default App
