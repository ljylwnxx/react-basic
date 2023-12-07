// 编写store
import axios from 'axios'
import { createSlice } from "@reduxjs/toolkit"

const foodsStore = createSlice({
  name: 'foods',
  initialState: {
    // 商品列表
    foodsList: [],
    // 菜单激活下标值
    activeIndex: 0,
    // 购物车列表
    cartList: []
  },
  reducers: {
    // 更改商品里表
    setFoodsList (state, action) {
      state.foodsList = action.payload
    },
    // 更改 activeIndex
    changeActiveIndex (state, action) {
      state.activeIndex = action.payload
    },
    // 添加购物车
    addCart (state, action) {
      // action.payload.id去匹配cartList，匹配到表示添加过
      const item = state.cartList.find(item => item.id === action.payload.id)
      item ? item.count++ : state.cartList.push(action.payload)
    }
  }
})

// 异步获取
const { setFoodsList, changeActiveIndex, addCart } = foodsStore.actions
const fetchFoodsList = () => {
  return async (dispatch) => {
    // 编写异步逻辑
    const res = await axios.get('http://localhost:3008/foodsList')
    // 调用dispatch函数提交 action
    dispatch(setFoodsList(res.data))
  }
}

export { fetchFoodsList, changeActiveIndex, addCart }

const reducer = foodsStore.reducer

export default reducer