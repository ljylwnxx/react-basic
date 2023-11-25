import { useState } from 'react'
import { Avatar } from 'antd'
import './app.css'
import avatar from './assets/banner.jpg'
import _ from 'lodash'
import classNames from 'classnames'

const showText = true
const topTipNumber = ''
const tabMenu = [
  {
    tabId: 1,
    text: '按热度排序',
    type: 'hot'
  },
  {
    tabId: 2,
    text: '按时间排序',
    type: 'time'
  }
]

const list = [
  {
    listId: 1,
    user: {
      uid: '110210',
      avatar: avatar,
      uname: 'Wnxx'
    },
    content: '感觉讲的很不错',
    time: new Date('2022-01-11 09:09:00'),
    like: 120,
    attitude: 0,
  },
  {
    listId: 2,
    user: {
      uid: '110211',
      avatar: avatar,
      uname: 'Pupu'
    },
    content: '有错别字',
    time: new Date('2022-03-14 19:09:00'),
    like: 20,
    attitude: 0,
  },
  {
    listId: 3,
    user: {
      uid: '110212',
      avatar: avatar,
      uname: 'Tom'
    },
    content: '这个原理好复杂',
    time: new Date('2022-02-21 22:09:00'),
    like: 96,
    attitude: 0,
  },
  {
    listId: 4,
    user: {
      uid: '110213',
      avatar: avatar,
      uname: 'John'
    },
    content: '讲解很细致，听的很明白',
    time: new Date('2022-05-17 19:19:00'),
    like: 320,
    attitude: 1,
  },
  {
    listId: 5,
    user: {
      uid: '110214',
      avatar: avatar,
      uname: 'Lily'
    },
    content: '听完这个，感觉完全明白了',
    time: new Date('2022-08-12 12:09:09'),
    like: 870,
    attitude: 1,
  },
]
const user = {
  uid: '110210',
  avatar: avatar,
  uname: 'wnxx'
}

function formatTime (time) {
  return `${time.getFullYear()}-${time.getMonth() + 1}-${time.getDate()}`
}

function App () {
  const [commentList, setCommentList] = useState(_.orderBy(list, 'like', 'desc'))
  const handleDel = (id) => {
    setCommentList(commentList.filter((item) => item.listId !== id))
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

  return (
    <div className="App">
      <div className="header">
        <div className="comment-number">{showText ? commentList.length + topTipNumber : '暂无'}评论</div>
        <div className="tab">
          {tabMenu.map((item) => (
            // <span
            //   className={`nav-item ${type === item.type && 'active'}`}
            //   onClick={() => handleTabChange(item.type)}
            //   key={item.tabId}>
            //   {item.text}
            // </span>
            <span
              className={classNames('nav-item', { active: item === type.item })}
              onClick={() => handleTabChange(item.type)}
              key={item.tabId}>
              {item.text}
            </span>
          ))}
        </div>
      </div>
      {/* 评论列表 */}
      <div className='reply-list'>
        {/* 评论项 */}
        {commentList.map(item => (
          <div key={item.listId} className='reply-item'>
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
                  <span className="reply-time">{formatTime(item.time)}</span>
                  {/* 评论数量 */}
                  <span className="reply-count">点赞数：{item.like}</span>
                  {/* 删除按钮 */}
                  {user.uid === item.user.uid && <span className="delete-btn" onClick={() => handleDel(item.listId)}>删除</span>}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}


export default App