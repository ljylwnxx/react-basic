import { useLocalStorage } from "./components/Hooks/useLocalStorage"
import { Button } from "antd"


function App () {
  const [message, setMessage] = useLocalStorage('useLocalStorage-key', 'wnxx')

  return (
    <div>
      {message}
      <Button type="primary" onClick={() => setMessage('pupu')}>更改按钮</Button>
    </div>
  )
}
export default App