import { DatePicker, NavBar } from "antd-mobile"
import classNames from "classnames"
import dayjs from "dayjs"
import _ from "lodash"
import { useEffect, useMemo, useState } from "react"
import { useSelector } from "react-redux"
import DayCash from "./components/DayCash"
import "./index.scss"

const Month = () => {
  // 按月做数据的分组
  const cashList = useSelector((state) => state.cash.cashList)
  const monthGroup = useMemo(() => {
    // return出去计算之后的值
    return _.groupBy(cashList, (item) => dayjs(item.date).format("YYYY-MM"))
  }, [cashList])

  //控制弹窗的打开和关闭
  const [dateVisible, setDateVisible] = useState(false)

  // 控制时间显示
  const [currentDate, setCurrentDate] = useState(() => {
    return dayjs(new Date()).format("YYYY-MM")
  })
  // 当前月数据
  const [currentMonthList, setMonthList] = useState([])
  //账单 支出 收入 结余 
  const monthResult = useMemo(() => {
    const pay = (currentMonthList || [])
      .filter((item) => item.type === "pay")
      .reduce((a, c) => a + c.money, 0)
    const income = (currentMonthList || [])
      .filter((item) => item.type === "income")
      .reduce((a, c) => a + c.money, 0)
    return {
      pay,
      income,
      total: pay + income
    }
  }, [currentMonthList])

  // 初始化的时候把当前月份的统计数据显示出来
  useEffect(() => {
    const nowDate = dayjs().format("YYYY-MM")
    // 边界值控制
    if (monthGroup[nowDate]) {
      setMonthList(monthGroup[nowDate])
    }
  }, [monthGroup])

  // 确认回调
  const onConfirm = (date) => {
    setDateVisible(false)
    // 其他逻辑
    const formatDate = dayjs(date).format("YYYY-MM")
    setMonthList(monthGroup[formatDate])
    setCurrentDate(formatDate)
  }

  // 当前月按照日来分组
  const dayGroup = useMemo(() => {
    const groupData = _.groupBy(currentMonthList, (item) =>
      dayjs(item.date).format("YYYY-MM-DD")
    )
    const keys = Object.keys(groupData)
    return {
      groupData,
      keys
    }
  }, [currentMonthList])

  return (
    <div className="monthlyCash">
      <NavBar className="nav" backArrow={false}>
        月度收支
      </NavBar>
      <div className="content">
        <div className="header">
          {/* 时间切换区域 */}
          <div className="date" onClick={() => setDateVisible(true)}>
            <span className="text">{currentDate + ""}月账单</span>
            <span
              // 根据当前弹窗打开的状态控制expand类名是否存在 
              className={classNames("arrow", dateVisible && "expand")}
            >
            </span>
          </div>
          {/* 统计区域 */}
          <div className="twoLineOverview">
            <div className="item">
              <span className="money">{monthResult.pay.toFixed(2)}</span>
              <span className="type">支出</span>
            </div>
            <div className="item">
              <span className="money">{monthResult.income.toFixed(2)}</span>
              <span className="type">收入</span>
            </div>
            <div className="item">
              <span className="money">{monthResult.total.toFixed(2)}</span>
              <span className="type">结余</span>
            </div>
          </div>
          {/* 时间选择器 */}
          <DatePicker
            className="kaDate"
            title="记账日期"
            precision="month"
            visible={dateVisible}
            onClick={() => setDateVisible(false)}
            onConfirm={onConfirm}
            onCancel={() => setDateVisible(false)}
            onClose={() => setDateVisible(false)}
            max={new Date()}
          />
        </div>
        {/* {单日列表} */}
        {dayGroup.keys.map((key) => {
          return (
            <DayCash
              cashList={dayGroup.groupData[key]}
              date={key}
              key={key}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Month