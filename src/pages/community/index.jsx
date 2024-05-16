import { Outlet, useNavigate } from 'react-router-dom';
import { communityTab } from '/src/data/stores';
import { useAtom } from 'jotai';
import { useEffect } from 'react';

//children pages
export { Ranking } from './children/Ranking';
export { Friends } from './children/Friends';
export { Board } from './children/Board';


//main page for community page
export function CommunityPage() {
  const [activeTab, setActiveTab] = useAtom(communityTab);
  const navigate = useNavigate();

  useEffect(() => {
    if(activeTab === 1) {
      navigate('../community');
    } else if(activeTab === 2) {
      navigate('../community/friends');
    } else if(activeTab === 3) {
      navigate('../community/board');
    }
  }, [activeTab])


  return (
    <div className="w-full h-full bg-primary-bg flex flex-col ">
      <ul className="w-full flex items-center gap-2 p-3 bg-primary-bg">
        <li>
          <button 
            className={`px-6 py-2 w-full rounded-xl ${activeTab === 1 ? 'bg-white text-black' : 'bg-black text-white'}`}
            onClick={() => {setActiveTab(1); navigate('/main/community')}}>랭킹</button>
        </li>
        <li>
          <button 
            className={`px-6 py-2 w-full rounded-xl ${activeTab === 2 ? 'bg-white text-black' : 'bg-black text-white'}`}
            onClick={() => {setActiveTab(2); navigate('/main/community/friends')}}>친구</button>
        </li>
        <li>
          <button 
            className={`px-6 py-2 w-full rounded-xl ${activeTab === 3 ? 'bg-white text-black' : 'bg-black text-white'}`}
            onClick={() => {setActiveTab(3); navigate('/main/community/board')}}>게시판</button>
        </li>
      </ul>
      <Outlet />
    </div>
  )
}