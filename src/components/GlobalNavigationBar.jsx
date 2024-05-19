import { Link } from "react-router-dom"
import homeActive from 'src/assets/homeActive.png';
import homeInactive from 'src/assets/homeInactive.png';
import communityActive from 'src/assets/communityActive.png';
import communityInactive from 'src/assets/communityInactive.png';
import { GNBPage } from "../data/stores";
import { useAtom } from 'jotai';
import { useEffect } from "react";

export function GlobalNavigationBar() {
  const [page, setPage]  = useAtom(GNBPage);

  useEffect(() => {
    if (window.location.pathname === '/main/community') {
      setPage('커뮤니티');
    } else if(window.location.pathname === '/main') {
      setPage('홈');
    }
  }, [window.location.pathname]) 


  return (
    <div className="absolute z-1 text-white bottom-5 w-full flex justify-center mx-auto inset-x-0">
      <div className="bg-black rounded-full px-5 py-2 flex justify-between items-center">
        <Link to="/main"  onClick={() => {setPage('홈')}}>
          <img src={page === '홈' ? homeActive : homeInactive} alt="홈" />
        </Link>
        <p className="px-4 text-gray-400">|</p>
        <Link to="/main/community"  onClick={() => {setPage('커뮤니티')}} >
          <img src={page === '커뮤니티' ? communityActive : communityInactive} alt="커뮤니티"/>
        </Link>
      </div>
    </div>
  )
}