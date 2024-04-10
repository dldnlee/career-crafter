import { useState } from "react";
import { pb } from "../data/pb";
import { useNavigate } from "react-router-dom";

export function SignupPage() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirm, setConfirm] = useState();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    const data = {
      "name" : name,
      "email" : email,
      "password" : password,
      "passwordConfirm" : confirm
    }

    try {
      await pb.collection('users').create(data);
      await pb.collection('users').authWithPassword(email, password);
      navigate('/');
    } catch(error) {
      console.log(error);
      console.log('Please check again');
    }
  }

  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-10">
      <h1 className="text-2xl">회원가입</h1>
      <form 
        className="flex flex-col px-7 w-full items-center justify-center gap-6"
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

        <div className="flex flex-col w-full mt-4 gap-2">
          <button
            className="w-full bg-white border border-black hover:bg-black hover:text-white py-4 px-2 rounded-lg"
            >가입하기</button>
          <button
            type="button"
            onClick={() => {navigate(-1)}}
            className="w-full bg-black text-white hover:bg-white hover:border hover:border-black hover:text-black py-4 px-2 rounded-lg"
          >이전</button>
        </div>
      </form>
    </div>
  )
}