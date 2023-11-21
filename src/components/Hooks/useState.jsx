import { useState } from 'react'
import { Button } from 'antd'

const hobbies = [
  { id: 0, activity: '旅游' },
  { id: 1, activity: '唱歌' },
]
function App() {
  const [name, setName] = useState('pupu')
  const [age, setAge] = useState(10)
  const [hobby, setHobby] = useState(hobbies)
  const [address, setAddress] = useState({
    location: {
      provice: '云南省',
      city: '丽江市',
    },
  })

  function handleAddressChange(address) {
    setAddress({
      ...address,
      location: {
        ...address.location,
        provice: '浙江省',
        city: '杭州市',
      },
    })
  }

  function handleHobbyChange() {
    setHobby([...hobby, { id: 2, activity: '绘画' }])
  }
  return (
    <div>
      <div className="name">
        <div>姓名：{name}</div>
        <Button type="primary" onClick={() => setName('wnxx')}>
          修改姓名按钮
        </Button>
      </div>
      <div className="age">
        <div>年龄：{age}</div>
        <Button type="primary" onClick={() => setAge(3)}>
          修改年龄按钮
        </Button>
      </div>
      <div className="address">
        <div>
          地址：{address.location.provice}-{address.location.city}
        </div>
        <Button type="primary" onClick={handleAddressChange}>
          修改地址按钮
        </Button>
      </div>
      <div className="hobby">
        <div>爱好：{hobby.map((item) => item.activity).join('、')}</div>
        <Button type="primary" onClick={handleHobbyChange}>
          修改爱好按钮
        </Button>
      </div>
    </div>
  )
}
export default App
