import { useState } from 'react'

export function useWindowScroll() {
  const [y, setY] = useState(0)
  window.addEventListener('scroll', () => {
    const h = document.documentElement.scrollTop
    setY(h)
  })
  return [y]
}

// import { useWindowScroll } from "./components/Hooks/useWindowScroll"

// function App () {
//   const [y] = useWindowScroll()
//   return (
//     <div style={{ height: '960px' }}>
//       {y}
//     </div>
//   )
// }
// export default App
