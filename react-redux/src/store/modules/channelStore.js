import { createSlice } from '@reduxjs/toolkit'
import channel from '../../mock/channels.json'

const channelStore = createSlice({
  name: 'channel',
  // 初始化state
  initialState: {
    channelList: []
  },
  // 修改状态的方法 同步方法 支持直接修改
  reducers: {
    setChannels (state, action) {
      state.channelList = action.payload
    }
  }
})
// 异步请求部分
const { setChannels } = channelStore.actions
const fetchChannelList = () => {
  return (dispatch) => {
    dispatch(setChannels(channel.data.channels))
  }

}

// 按需导出actionCreater
export { fetchChannelList }

const reducer = channelStore.reducer
// 默认导出reducer
export default reducer