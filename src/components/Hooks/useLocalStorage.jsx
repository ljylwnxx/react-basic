import { useState, useEffect } from 'react'

export function useLocalStorage(key, defaultValue) {
  const [message, setMessage] = useState(defaultValue)
  useEffect(() => {
    // 每次message变化，就会同步到本地
    window.localStorage.setItem(key, message)
  }, [message, key])
  return [message, setMessage]
}

// import { useLocalStorage } from "./components/Hooks/useLocalStorage"
// import { Button } from "antd"

// function App () {
//   const [message, setMessage] = useLocalStorage('useLocalStorage-key', 'wnxx')

//   return (
//     <div>
//       {message}
//       <Button type="primary" onClick={() => setMessage('pupu')}>更改按钮</Button>
//     </div>
//   )
// }
// export default App
