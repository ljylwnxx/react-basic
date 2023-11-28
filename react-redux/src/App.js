
import { useDispatch, useSelector } from 'react-redux'
// 导入创action对象的方法
import { inscrement, decrement, addToNumber } from './store/modules/counterStore'
import { fetchChannelList } from './store/modules/channelStore'
import { useEffect } from 'react'

function App () {
  const { count } = useSelector(state => state.counter)
  const { channelList } = useSelector(state => state.channel)
  // 得到dispatch函数
  const dispatch = useDispatch()
  // 使用useEffect触发异步请求
  useEffect(() => {
    dispatch(fetchChannelList())
  }, [dispatch])


  return (
    <div className="App">
      {/* 调用dispath提交action对象 */}
      <button onClick={() => dispatch(decrement())}>减少</button>
      <span>{count}</span>
      <button onClick={() => dispatch(inscrement())}>增加 </button>
      <button onClick={() => dispatch(addToNumber(10))}>增加到10</button>
      <button onClick={() => dispatch(addToNumber(20))}>增加到20 </button>
      <ul>
        {channelList.map(item => <li key={item.id}>{item.name}</li>)}

      </ul>
    </div>
  )
}

export default App
