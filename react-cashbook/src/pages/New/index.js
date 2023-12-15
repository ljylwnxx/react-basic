import Icon from "@/components/Icon"
import { cashListData } from "@/contants"
import { Button, DatePicker, Input, NavBar } from "antd-mobile"
import classNames from "classnames"
import dayjs from "dayjs"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { addCashList } from "@/store/modules/cashStore"
import "./index.scss"

const New = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  // 控制时间的打开和关闭
  const [dateVisible, setDateVisible] = useState(false)
  const [date, setDate] = useState()
  const dateConfirm = (value) => {
    setDate(value)
    setDateVisible(false)
  }

  // 控制收入支出的状态
  const [cashType, setcashType] = useState("pay")
  // 保存账单
  const [money, setMoney] = useState(0)
  const moneyChange = (value) => {
    setMoney(value)
  }
  const [useFor, setUseFor] = useState("")
  const saveCash = () => {
    const data = {
      type: cashType,
      money: cashType === "pay" ? -money : money,
      date: date,
      useFor: useFor,
    }
    dispatch(addCashList(data))
  }
  return (
    <div className="keepAccounts">
      <NavBar className="nav" onBack={() => navigate(-1)}>
        记一笔
      </NavBar>

      <div className="header">
        <div className="kaType">
          <Button
            shape="rounded"
            className={classNames(cashType === "pay" ? "selected" : "")}
            onClick={() => setcashType("pay")}
          >
            支出
          </Button>
          <Button
            shape="rounded"
            className={classNames(cashType === "income" ? "selected" : "")}
            onClick={() => setcashType("income")}
          >
            收入
          </Button>
        </div>

        <div className="kaFormWrapper">
          <div className="kaForm">
            <div className="date">
              <Icon type="calendar" className="icon" />
              <span className="text" onClick={() => setDateVisible(true)}>
                {dayjs(date).format("YYYY-MM-DD")}
              </span>
              {/* 时间选择器 */}
              <DatePicker
                className="kaDate"
                title="记账日期"
                max={new Date()}
                visible={dateVisible}
                onConfirm={dateConfirm}
              />
            </div>
            <div className="kaInput">
              <Input
                className="input"
                placeholder="0.00"
                type="number"
                value={money}
                onChange={moneyChange}
              />
              <span className="iconYuan">¥</span>
            </div>
          </div>
        </div>
      </div>

      <div className="kaTypeList">
        {cashListData[cashType].map((item) => {
          return (
            <div className="kaType" key={item.type}>
              <div className="title">{item.name}</div>
              <div className="list">
                {item.list.map((item) => {
                  return (
                    <div
                      className={classNames(
                        "item",
                        useFor === item.type && "selected"
                      )}
                      key={item.type}
                      onClick={() => setUseFor(item.type)}
                    >
                      <div className="icon">
                        <Icon type={item.type} />
                      </div>
                      <div className="text">{item.name}</div>
                    </div>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>

      <div className="btns">
        <Button className="btn save" onClick={saveCash}>
          保 存
        </Button>
      </div>
    </div>
  )
}

export default New