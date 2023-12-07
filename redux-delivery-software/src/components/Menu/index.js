import classNames from 'classnames'
import { changeActiveIndex } from '../../store/modules/takeaway'
import { useSelector, useDispatch } from 'react-redux'
import './index.scss'



const Menu = () => {
  const { foodsList, activeIndex } = useSelector(state => state.foods)
  const menus = foodsList.map(item => ({ tag: item.tag, name: item.name }))
  const dispatch = useDispatch()
  return (
    <div className="list-menu">
      {menus.map((item, index) => {
        return (
          <div
            onClick={() => dispatch(changeActiveIndex(index))}
            key={item.tag}
            className={classNames('list-menu-item', activeIndex === index && 'active')}
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