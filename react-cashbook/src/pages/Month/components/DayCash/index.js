import classNames from "classnames"
import { useState, useMemo } from "react"
import Icon from "@/components/Icon"
import { cashTypeToName } from "@/contants/index"
import "./index.scss"

const DailyCash = ({ date, cashList }) => {
  const [visible, setVisible] = useState(false)
  // 控制展开收起
  const dayResult = useMemo(() => {
    const pay = (cashList || [])
      .filter((item) => item.type === "pay")
      .reduce((a, c) => a + c.money, 0)
    const income = (cashList || [])
      .filter((item) => item.type === "income")
      .reduce((a, c) => a + c.money, 0)
    return {
      pay,
      income,
      total: pay + income
    }
  }, [cashList])

  return (
    <div className={classNames("dailyCash")}>
      <div className="header">
        <div className="dateIcon">
          <span className="date">{date}</span>
          <span
            className={classNames("arrow", visible && "expand")}
            onClick={() => setVisible(!visible)}
          >
          </span>
        </div>
        <div className="oneLineOverview">
          <div className="pay">
            <span className="type">支出</span>
            <span className="money">{dayResult.pay.toFixed(2)}</span>
          </div>
          <div className="income">
            <span className="type">收入</span>
            <span className="money">{dayResult.income.toFixed(2)}</span>
          </div>
          <div className="balance">
            <span className="money">{dayResult.total.toFixed(2)}</span>
            <span className="type">结余</span>
          </div>
        </div>
      </div>
      {/* 单日列表 */}
      <div className="cashList" style={{ display: visible ? "block" : "none" }}>
        {cashList.map((item) => {
          return (
            <div className="cash" key={item.id}>
              {/* 图标调用 */}
              <Icon type={item.useFor} />
              <div className="detail">
                <div className="cashType">{cashTypeToName[item.useFor]}</div>
              </div>
              <div className={classNames("money", item.type)}>
                {item.money.toFixed(2)}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default DailyCash