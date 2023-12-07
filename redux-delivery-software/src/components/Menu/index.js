import classNames from 'classnames'
import './index.scss'
import { useSelector } from 'react-redux'

// const menus = foodList.map(item => ({ tag: item.tag, name: item.name }))

const Menu = () => {
  const { foodsList } = useSelector(state => state.foods)
  return (
    <div className="list-menu">
      {foodsList.map(item => {
        console.log(item, 'item')
        return (
          <div
            key={item.tag}
            className={classNames('list-menu-item', 'active')}
          >
            {item.name}
          </div>
        )
      })
      }
    </div>
  )
}
export default Menu