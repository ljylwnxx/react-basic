// 账单相关的store

import { createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const cashStore = createSlice({
  name: 'cash',
  // 数据状态state
  initialState: {
    cashList: []
  },
  // reducers
  reducers: {
    // 同步修改方法
    setCashList (state, action) {
      state.cashList = action.payload
    }
  }

})
// 解构actionCreater函数
const { setCashList } = cashStore.actions
// 异步
const getCashList = () => {
  return async (dispatch) => {
    // 异步请求
    const res = await axios.get('http://localhost:3333/ka')
    // 触发同步reducer
    dispatch(setCashList(res.data))
  }
}
export { getCashList }
// 导出reducer
const reducer = cashStore.reducer

export default reducer