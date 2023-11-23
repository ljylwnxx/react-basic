import { useSearchParams, useParams } from "react-router-dom"

function About () {
  // params是一个对象，对象里的get方法用来获取对应参数，将参数名作为get方法的实参
  // const [params] = useSearchParams()
  // const id = params.get('id')


  const params = useParams()
  const id = params.id

  return (
    <div>
      这是关于页面
      <div>得到的参数id为:{id}</div>
    </div>
  )
}

export default About