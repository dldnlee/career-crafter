import { useState } from "react";
import { pb } from "../data/pb";

export function SignupPage() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirm, setConfirm] = useState();

  async function handleSubmit() {

    const data = {
      "name" : name,
      "email" : email,
      "password" : password,
      "passwordConfirm" : confirm
    }

    try {
      await pb.collection('users').create(data);
    } catch {
      console.log('Please check again')
    }
  }


  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-10">
      <h1 className="text-2xl">회원가입</h1>
      <form 
        action="/main" 
        className="flex flex-col px-7 w-full items-center justify-center gap-4"
        onSubmit={handleSubmit}>
        <label htmlFor="name" className="flex items-start justify-center flex-col w-full">이름
          <input 
            type="text" 
            id="name" 
            placeholder="이름" 
            className="p-4 bg-gray-100 rounded-lg w-full focus:outline-black" 
            onChange={(e) => {setName(e.target.value)}}/>
        </label>

        <label htmlFor="email" className="flex items-start justify-center flex-col w-full">이메일
          <input 
            type="email" 
            id="email" 
            placeholder="이메일" 
            className="p-4 bg-gray-100 rounded-lg w-full focus:outline-black" 
            onChange={(e) => {setEmail(e.target.value)}}/>
        </label>

        <label htmlFor="password" className="flex items-start justify-center flex-col w-full">비밀번호
          <input 
            type="password" 
            id="password" 
            placeholder="비밀번호" 
            className="p-4 bg-gray-100 rounded-lg w-full focus:outline-black" 
            onChange={(e) => {setPassword(e.target.value)}}/>
        </label>

        <label htmlFor="password-confirm" className="flex items-start justify-center flex-col w-full">비밀번호 확인
          <input 
            type="password" 
            id="password-confirm"
            placeholder="비밀번호 확인" 
            className="p-4 bg-gray-100 rounded-lg w-full focus:outline-black" 
            onChange={(e) => {setConfirm(e.target.value)}}/>
        </label>

        <button 
          className="w-full bg-white border border-black hover:bg-black hover:text-white py-4 px-2 rounded-lg" 
          >회원가입</button>
        <div className="flex w-full text-[13px] justify-between items-center px-12">
        </div>
      </form>
    </div>
  )
}