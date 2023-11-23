// 导入useNavigate 
import { Button } from "antd"
import { useNavigate } from "react-router-dom"


function Login () {
  // 执行useNavigate 得到一个跳转函数
  const navigate = useNavigate()
  // 跳转到关于页
  function goAbout () {
    // 调用跳转函数传入目标路径
    // navigate('/about', { replace: true })
    // 携带参数
    navigate('/about?id=1001', { replace: true })

  }
  return (
    <div>
      登录页面
      <Button onClick={goAbout}>跳转按钮</Button>
    </div>
  )
}

export default Login