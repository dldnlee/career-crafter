import { FindInfo } from "src/components"
import { useState } from "react";
import { pb } from "../data/pb";
import { useNavigate, Link } from "react-router-dom";
import close from "src/assets/close.svg";
import { Loader } from "../components";


const validInputStyle = "focus:outline-black";
const invalidInputStyle = "border-red-500 focus:outline-red-500";

export function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [valid, setValid] = useState(true);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      console.log('test');
      setLoading(true);
      await pb.collection('users').authWithPassword(email, password);
      setLoading(false);
      navigate('/')
    } catch {
      setLoading(false);
      setValid(false);
      console.log('login failed') // Will change this to setting the state of the input boxes validation
    }
  }
  
  if (loading) return (<Loader active={loading}/>)

  return (
    <div className="flex flex-col gap-10 items-center justify-center w-full h-full bg-primary text-white">
      <div className="absolute top-0 left-0 w-full flex justify-end p-4">
        <Link to='/access' replace className="w-[30px]">
          <img src={close} alt="닫기" className="w-full invert"/>
        </Link>
      </div>
      <div className="flex flex-col gap-2 w-fit justify-center items-start">
        <div className="text-[40px] font-extrabold flex flex-col leading-none">
          <p>Career</p>
          <p>Crafter</p>
        </div>
        <p>: 나만의 진로 설계 가이드</p>
      </div>
      <form
        className="flex flex-col px-7 w-full items-center justify-center gap-4" 
        onSubmit={handleSubmit}>
        <label htmlFor="email" className="w-full flex flex-col gap-2">이메일
          <input 
            type="email" 
            id="email" 
            placeholder="이메일" 
            className={`p-4 py-3 bg-gray-100 rounded-md w-full text-black ${valid ? validInputStyle : invalidInputStyle}`}
            onChange={(e) => {setEmail(e.target.value); valid===false ? setValid(true) : null}}/>
        </label>
        <label htmlFor="password" className="w-full flex flex-col gap-2">비밀번호
          <input 
            type="password" 
            id="password" 
            placeholder="비밀번호" 
            className={`p-4 py-3 bg-gray-100 rounded-md w-full text-black ${valid ? validInputStyle : invalidInputStyle}`}
            onChange={(e) => {setPassword(e.target.value); valid===false ? setValid(true) : null}}/>
          <span className={`${valid ? 'hidden' : 'block'} text-red-500`}>이메일 또는 비밀번호가 잘못 되었습니다</span>
        </label>
        <button 
          className="w-full bg-point-color mt-5 hover:bg-point-color/60 hover:text-white py-3 rounded-full"
          >로그인
        </button>
        <div className="flex w-full text-[13px] justify-between items-center px-12">
          <FindInfo textTwo="회원가입" routeTwo="/signup"/>
        </div>
      </form>
    </div>
  )
}