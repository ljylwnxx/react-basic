import { useWindowScroll } from "./components/Hooks/useWindowScroll"

function App () {
  const [y] = useWindowScroll()
  return (
    <div style={{ height: '960px' }}>
      {y}
    </div>
  )
}
export default App