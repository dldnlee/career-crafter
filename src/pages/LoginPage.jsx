import { FindInfo } from "src/components"
import { useState } from "react";
import { pb } from "../data/pb";
import { useNavigate } from "react-router-dom";




export function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }
  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  async function handleSubmit() {
    try {
      await pb.collection('users').authWithPassword(
      email, password);
      navigate('/main')
    } catch {
      console.log('login failed') // Will change this to setting the state of the input boxes validation
    }
  }
  

  return (
    <div className="flex flex-col gap-10 items-center justify-center w-full h-full">
      <div className="flex flex-col gap-2 w-fit justify-center items-start">
        <div className="text-[54px] font-extrabold flex flex-col leading-none">
          <p>Career</p>
          <p>Crafter</p>
        </div>
        <p className="font-extrabold text-[18px]">: 나만의 진로 설계 가이드</p>
      </div>
      <form action="/main" className="flex flex-col px-7 w-full items-center justify-center gap-4" onSubmit={handleSubmit}>
        <label htmlFor="email" className="sr-only">이메일</label>
        <input 
          type="email" 
          id="email" 
          placeholder="이메일" 
          className="p-4 bg-gray-100 rounded-lg w-full focus:outline-black"
          onChange={handleEmailChange}/>
        <label htmlFor="password" className="sr-only">비밀번호</label>
        <input 
          type="password" 
          id="password" 
          placeholder="비밀번호" 
          className="p-4 bg-gray-100 rounded-lg w-full focus:outline-black"
          onChange={handlePasswordChange}/>
        <button 
          className="w-full bg-white border border-black hover:bg-black hover:text-white py-4 px-2 rounded-lg" 
          type="button"
          onClick={handleSubmit}>로그인</button>
        <div className="flex w-full text-[13px] justify-between items-center px-12">
          <FindInfo />
        </div>
      </form>
    </div>
  )
}