import { Link } from "react-router-dom"


export function FindInfo({
  textOne='비밀번호 찾기', 
  textTwo='아이디 찾기',
  routeOne,
  routeTwo
}) {
  return (
    <>
      <Link to={routeOne} className="p-3">{textOne}</Link>
      <hr className="h-[20px] w-[1px] bg-black"/>
      <Link to={routeTwo} className="p-3">{textTwo}</Link>
    </>
  )
}