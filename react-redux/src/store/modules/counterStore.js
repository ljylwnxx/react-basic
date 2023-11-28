import { createSlice } from '@reduxjs/toolkit'

const counterStore = createSlice({
  name: 'counter',
  // 初始化state
  initialState: {
    count: 0
  },
  // 修改状态的方法 同步方法 支持直接修改
  reducers: {
    inscrement (state) {
      state.count++
    },
    decrement (state) {
      state.count--
    }
  }
})
// 解构出来actionCreater函数
const { inscrement, decrement } = counterStore.actions

// 获取reducer
const reducer = counterStore.reducer
// 按需导出actionCreater
export { inscrement, decrement }
// 默认导出reducer
export default reducer