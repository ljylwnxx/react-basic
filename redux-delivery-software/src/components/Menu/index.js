import foodList from '../../mock/foodsList.json'
import classNames from 'classnames'
import './index.scss'

// const menus = foodList.map(item => ({ tag: item.tag, name: item.name }))

const Menu = () => {
  return (
    <div className="list-menu">
      {foodList.foodsList.map(item => {
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