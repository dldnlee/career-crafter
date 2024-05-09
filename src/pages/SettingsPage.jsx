import { useNavigate } from "react-router-dom"
import { pb } from "../data/pb";

export function SettingsPage() {
  const navigate = useNavigate();


  async function handleLogout() {
    pb.authStore.clear();
    navigate('/');
  }

  return (
    <div className="absolute left-0 top-0 w-full h-full z-10 backdrop-blur-md bg-black/20">
      <button 
        className="h-full w-full"
        onClick={() => {navigate(-1)}}
      ></button>

      <div className={`w-2/3 h-full fixed bg-white text-gray-700 right-0 top-0 pt-5`}>
        <h1 className="w-full py-3 px-4 text-xl font-bold">이은원님,</h1>
        <ul className="py-3 w-full"> 
          <li className="py-3 px-3 border-b">설정</li>
          <li className="py-3 px-3 border-b">설정</li>
          <li className="">
            <button 
              className="py-3 px-3 border-b w-full text-start hover:bg-black hover:text-white"
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