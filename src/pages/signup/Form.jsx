import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSetAtom } from "jotai";
import { signupData } from "../../data";

export function Form() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirm, setConfirm] = useState();
  const setUserInfo = useSetAtom(signupData);
  const navigate = useNavigate();
  const [validState, setValidState] = useState(false);

  useEffect(() => {
    if(name && password && email && password && confirm && password === confirm) {
      setValidState(true);
    } else {
      setValidState(false);
    }
  }, [name, password, email, password, confirm])
  

  async function handleSubmit(e) {
    e.preventDefault();

    const data = {
      "name" : name,
      "email" : email,
      "password" : password,
      "passwordConfirm" : confirm,
      "initstats" : null
    }

    setUserInfo(data);
    navigate('/signup/tutorial');
  }

  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-5 bg-white">
      <h1 className="text-2xl">회원가입</h1>
      <form
        className="flex flex-col px-7 w-full items-center justify-center gap-6"
        onSubmit={handleSubmit}>
        <label htmlFor="name" className="flex items-start justify-center flex-col w-full">이름
          <input 
            type="text" 
            id="name" 
            placeholder="이름" 
            required
            className="p-4 bg-gray-100 rounded-lg w-full focus:outline-black" 
            onChange={(e) => {setName(e.target.value)}}/>
        </label>

        <label htmlFor="email" className="flex items-start justify-center flex-col w-full">이메일
          <input 
            type="email" 
            id="email" 
            placeholder="이메일" 
            required
            className="p-4 bg-gray-100 rounded-lg w-full focus:outline-black" 
            onChange={(e) => {setEmail(e.target.value)}}/>
        </label>

        <label htmlFor="password" className="flex items-start justify-center flex-col w-full">비밀번호
          <input 
            type="password" 
            id="password" 
            placeholder="비밀번호" 
            required
            className="p-4 bg-gray-100 rounded-lg w-full focus:outline-black" 
            onChange={(e) => {setPassword(e.target.value)}}/>
        </label>

        <label htmlFor="password-confirm" className="flex items-start justify-center flex-col w-full">비밀번호 확인
          <input 
            type="password" 
            id="password-confirm"
            placeholder="비밀번호 확인" 
            required
            className={`p-4 bg-gray-100 rounded-lg w-full focus:outline-black ${confirm === password ? '' : 'border border-red-400'}`} 
            onChange={(e) => {setConfirm(e.target.value)}}/>
            <span className={`${confirm === password ? 'invisible' : 'block'} text-sm text-red-500`}>비밀번호가 일치하지 않습니다</span>
        </label>

        <div className="flex flex-col w-full gap-2">
          <button
            disabled={validState ? false : true}
            className={`w-full ${validState ? 'bg-white border border-black hover:bg-black hover:text-white' : 'bg-gray-200 text-gray-400'} py-3 rounded-lg`}
            >가입하기</button>
          <button
            type="button"
            onClick={() => {navigate(-1)}}
            className="w-full bg-black text-white hover:bg-white hover:border hover:border-black hover:text-black py-3 rounded-lg"
          >이전</button>
        </div>
      </form>
    </div>
  )
}