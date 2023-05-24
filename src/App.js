import './app.css'
import avatar from './assets/banner.jpg'
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
const active = 'hot'
const commentList = [
  {
    listId: 1,
    img: './assets/banner.jpg',
    name: '第一位',
    content: '感觉讲的很不错',
    time: new Date('2022-01-11 09:09:00'),
    attitude: 0
  },
  {
    listId: 2,
    img: './assets/banner.jpg',
    name: '第二位',
    content: '有错别字',
    time: new Date('2022-03-14 19:09:00'),
    attitude: 0
  },
  {
    listId: 3,
    img: './assets/banner.jpg',
    name: '第三位',
    content: '这个原理好复杂',
    time: new Date('2022-02-21 22:09:00'),
    attitude: 0
  },
  {
    listId: 4,
    img: './assets/banner.jpg',
    name: '第四位',
    content: '讲解很细致，听的很明白',
    time: new Date('2022-05-17 19:19:00'),
    attitude: 1
  },
  {
    listId: 5,
    img: './assets/banner.jpg',
    name: '第五位',
    content: '听完这个，感觉完全明白了',
    time: new Date('2022-08-12 12:09:09'),
    attitude: 1
  }
]

function formatTime (time) {
  return `${time.getFullYear()}-${time.getMonth() + 1}-${time.getDate()}`
}

function App () {
  return (
    <div className="App">
      <div className='header'>
        {showText ? commentList.length + topTipNumber : '暂无'}评论
      </div>
      <div className="tab">
        {tabMenu.map(item => <span className={item.type === active ? 'on' : ''} key={item.tabId}>{item.text}</span>)}
      </div>
      <div className="list-frame">
        {commentList.map(item => (
          <div className="list" key={item.listId}>
            <div className='avatar-frame'>
              <img src={avatar} className="avatar" />
            </div>
            <div className="main">
              <div className="name">
                {item.name}
              </div>
              <div className="content">
                {item.content}
              </div>
              <div className="time">
                {formatTime(item.time)}
              </div>
              <div className="attitude">
                <span className={item.attitude === 1 ? 'like liked' : 'like'}>
                  <i className="icon" />
                </span>
                <span className={item.attitude === 0 ? 'hate hated' : 'hate'}>
                  <i className="icon" />
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App