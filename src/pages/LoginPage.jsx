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
    <div className="flex flex-col items-center justify-center w-full h-full">
      <form action="/main" className="flex flex-col px-7 w-full items-center justify-center gap-4">
        <h1 className="text-2xl">로그인</h1>
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
          className="w-full bg-gray-700 text-white py-4 px-2 rounded-lg" 
          type="button"
          onClick={handleSubmit}>로그인</button>
        <div className="flex w-full text-[13px] justify-between items-center px-12">
          <FindInfo />
        </div>
      </form>
    </div>
  )
}