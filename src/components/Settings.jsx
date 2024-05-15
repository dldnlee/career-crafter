import {useSetAtom} from 'jotai';
import { settings, pb } from '/src/data';
import {useNavigate} from 'react-router-dom';
import close from '/src/assets/close.svg'


export function Settings({active}) {
  const setSettings = useSetAtom(settings);
  const navigate = useNavigate();

  async function handleLogout() {
    pb.authStore.clear();
    navigate('/');
  }


  return (
    <div className={`${active ? 'absolute' : 'hidden'} left-0 top-0 w-full h-svh z-50 backdrop-blur-md`}>
      <button 
        className="h-full w-full"
        onClick={() => {setSettings(false)}}
      ></button>

      <div className={`w-2/3 h-full fixed bg-primary-bg text-white right-0 top-0 pt-10`}>
        <div className='w-full flex items-center justify-between px-4'>
          <h1 className="w-full text-xl font-bold">설정</h1>
          <button type='button' onClick={() => {setSettings(false)}} className='size-p[50px]'>
            <img className='w-full invert' src={close} alt="닫기" />
          </button>
        </div>
        <ul className="py-10 w-full"> 
          <li className="py-3 px-3 border-b border-gray-50/20">도움말</li>
          <li className="py-3 px-3 border-b border-gray-50/20">고객센터</li>
          <li className="">
            <button 
              className="py-3 text-red-500 px-3 border-b border-gray-50/20 w-full text-start hover:bg-black "
              onClick={handleLogout}
              type="button">
              로그아웃
            </button>
          </li>
        </ul>
      </div>
    </div>
  )
}