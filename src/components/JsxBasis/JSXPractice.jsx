import { useEffect, useRef, useState } from 'react'
import { Avatar, Button, Input } from 'antd'
import '../../app.css'
import _ from 'lodash'
import classNames from 'classnames'
import { v4 as uuidV4 } from 'uuid'
import dayjs from 'dayjs'
import axios from 'axios'

const { TextArea } = Input
const showText = true
const topTipNumber = ''
const tabMenu = [
  {
    tabId: 1,
    text: '按热度排序',
    type: 'hot',
  },
  {
    tabId: 2,
    text: '按时间排序',
    type: 'time',
  },
]

const user = {
  uid: '110210',
  avatar:
    'http://mms1.baidu.com/it/u=1752076575,487905276&fm=253&app=138&f=JPEG?w=500&h=500',
  uname: 'wnxx',
}

// 封装请求数据Hook
function useGetList() {
  // 获取接口渲染数据
  const [commentList, setCommentList] = useState([])
  useEffect(() => {
    // 请求数据
    async function getList() {
      const res = await axios.get('http://localhost:3001/list')
      const list = _.orderBy(res.data, 'like', 'desc')
      setCommentList(list)
    }
    getList()
  }, [])
  return {
    commentList,
    setCommentList,
  }
}

// 封装Item组件
function Item({ item, onDel }) {
  return (
    <div className="reply-item">
      {/* 头像 */}
      <div className="avatar">
        <Avatar size="large" src={item.user.avatar} />
      </div>
      <div className="content-wrap">
        {/* 用户名 */}
        <div className="user-info">
          <div className="user-name">{item.user.uname}</div>
        </div>
        {/* 评论内容 */}
        <div className="root-reply">
          <span className="reply-content">{item.content}</span>
          <div className="reply-info">
            {/* 评论时间 */}
            <span className="reply-time">{item.time}</span>
            {/* 评论数量 */}
            <span className="reply-count">点赞数：{item.like}</span>
            {/* 删除按钮 */}
            {user.uid === item.user.uid && (
              <span className="delete-btn" onClick={() => onDel(item.listId)}>
                删除
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

function JSXPractice() {
  const { commentList, setCommentList } = useGetList()

  // 删除功能
  const handleDel = (id) => {
    setCommentList(commentList.filter((item) => item.listId !== id))
    setType(type)
  }
  // tab切换功能
  const [type, setType] = useState('hot')
  const handleTabChange = (type) => {
    setType(type)
    if (type === 'hot') {
      setCommentList(_.orderBy(commentList, 'like', 'desc'))
    } else {
      setCommentList(_.orderBy(commentList, 'time', 'desc'))
    }
  }
  const [content, setContent] = useState('')
  // 获取dom
  const inputRef = useRef(null)
  // 发布
  const handlePublish = () => {
    setCommentList([
      ...commentList,
      {
        listId: 6,
        user: {
          uid: uuidV4(),
          avatar:
            'http://mms1.baidu.com/it/u=1752076575,487905276&fm=253&app=138&f=JPEG?w=500&h=500',
          uname: 'Judy',
        },
        content: content,
        time: dayjs(new Date('2022-12-12 12:12:12')).format(
          'YYYY-MM-DD HH:mm:ss'
        ),
        like: 370,
      },
    ])

    // 清空输入框内容
    setContent('')
    // 重新聚焦
    inputRef.current.focus()
  }
  return (
    <div className="App">
      <div className="header">
        {/* Tab控制 */}
        <div className="comment-number">
          评论{showText ? commentList.length + topTipNumber : '暂无'}
        </div>
        <div className="tab">
          {tabMenu.map((item) => (
            <span
              className={classNames('nav-item', { active: type === item.type })}
              onClick={() => handleTabChange(item.type)}
              key={item.tabId}>
              {item.text}
            </span>
          ))}
        </div>
      </div>
      {/* 评论框 */}
      <div className="reply-wrap">
        {/* 评论框 */}
        <TextArea
          showCount
          maxLength={100}
          placeholder="发一条评论"
          ref={inputRef}
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        {/* 发布按钮 */}
        <div className="reply-send">
          <Button type="primary" className="send-text" onClick={handlePublish}>
            发布
          </Button>
        </div>
      </div>
      {/* 评论列表 */}
      <div className="reply-list">
        {/* 评论项 */}
        {commentList.map((item) => (
          <Item key={item.listId} item={item} onDel={handleDel} />
        ))}
      </div>
    </div>
  )
}

export default JSXPractice
