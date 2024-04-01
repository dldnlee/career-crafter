import { Link } from "react-router-dom"


export function FindInfo() {
  return (
    <>
      <Link className="p-3">비밀번호 찾기</Link>
      <hr className="h-[20px] w-[1px] bg-black"/>
      <Link className="p-3">아이디 찾기</Link>
    </>
  )
}