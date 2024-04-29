import { Outlet, useNavigate } from 'react-router-dom';
import { communityTab } from '../../data/stores';
import { useAtom } from 'jotai';
import { useEffect } from 'react';

//children pages
export { Ranking } from './children/Ranking';
export { Friends } from './children/Friends';


//main page for community page
export function CommunityPage() {
  const [activeTab, setActiveTab] = useAtom(communityTab);
  const navigate = useNavigate();

  useEffect(() => {
    if(activeTab === 1) {
      navigate('../community');
    } else {
      navigate('../community/friends');
    }
  }, [activeTab])


  return (
    <div className="w-full h-full relative bg-primary-bg flex justify-center items-center">
      <ul className="absolute top-0 left-0 w-full flex justify-between border-b-secondary-bg border-b-2">
        <li className="w-full">
          <button 
            className={`p-4 w-full ${activeTab === 1 ? 'border-b-4 border-white text-white' : 'text-gray-500'}`}
            onClick={() => {setActiveTab(1); navigate('../community')}}>랭킹</button>
        </li>
        <li className="w-full">
          <button 
            className={`p-4 w-full ${activeTab === 2 ? 'border-b-4 border-white text-white' : 'text-gray-500'}`}
            onClick={() => {setActiveTab(2); navigate('../community/friends')}}>친구</button>
        </li>
      </ul>
      <Outlet />
    </div>
  )
}