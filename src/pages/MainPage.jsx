import Header from "src/components/Header"
import horse3d from "src/assets/horse3d.png"
import plus_square from "src/assets/plus_square.png"
import lion from 'src/assets/lion.png'
import scorpion from 'src/assets/scorpion.png'
import goat from 'src/assets/goat.png'
import { useEffect, useState } from "react"
import {motion} from 'framer-motion'
import { Outlet, useNavigate, Link } from "react-router-dom"
import { Radar } from "react-chartjs-2"
// eslint-disable-next-line no-unused-vars
import { Chart as ChartJS} from 'chart.js/auto'

const data = {
  labels: [
    'Eating',
    'Drinking',
    'Sleeping',
    'Designing',
    'Coding',
    'Cycling',
    'Running'
  ],
  datasets: [{
    label: '나의 이전 직무 상황',
    data: [65, 59, 90, 81, 56, 55, 40],
    fill: true,
    backgroundColor: 'rgba(255, 99, 132, 0.2)',
    borderColor: 'rgb(255, 99, 132)',
    pointBackgroundColor: 'rgb(255, 99, 132)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgb(255, 99, 132)'
  }, {
    label: '나의 현재 직무 상황',
    data: [28, 48, 40, 19, 96, 27, 100],
    fill: true,
    backgroundColor: 'rgba(54, 162, 235, 0.2)',
    borderColor: 'rgb(54, 162, 235)',
    pointBackgroundColor: 'rgb(54, 162, 235)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgb(54, 162, 235)'
  }]
};

function WorkPref() {
  return (
    <div className="py-5 px-10 bg-gray-50">
      <div className="flex justify-between pb-4 items-center">
        <button className="none w-[25px] h-[25px]"></button>
        <h2 className="text-2xl font-semibold">나의 직무 성향</h2>
        <button className="w-[25px] h-[25px] flex justify-center items-center">
          <img src={plus_square} alt="" className="w-full"/>
        </button>
      </div>
      <div className="w-full py-10 flex justify-center items-center border-t border-b border-gray-400">
        <Radar data={data} />
      </div>
    </div>
  )
}

// function KeywordPref() {
//   return (
//     <div className="py-5 px-10 bg-white">
//       <div className="flex justify-between pb-4 items-center">
//         <button className="none w-[25px] h-[25px]"></button>
//         <h2 className="text-2xl font-semibold">관심 키워드</h2>
//         <button className="w-[25px] h-[25px] flex justify-center items-center">
//           <img src={plus_square} alt="" className="w-full"/>
//         </button>
//       </div>
//       <div className="w-full py-10 flex justify-center items-center border-t border-b border-gray-400">
//         <div className="w-[200px] h-[200px] bg-gray-300"></div>
//       </div>
//     </div>
//   )
// }

// function NPC({name, image, clickHandler}) {
//   return (
//     <motion.button 
//       whileHover={{scale:1.1}}
//       whileTap={{scale:0.9}}
//       type='button'
//       className="w-[120px] flex flex-col items-center gap-2 bg-white shadow-lg  p-2 pt-4 rounded-2xl"
//       onClick={clickHandler}>
//         <img src={image} alt="" className="w-[40px]"/>
//         <p>{name}</p>
//     </motion.button>
//   )
// }

// function NPCContainer() {
//   const navigate = useNavigate();

//   function redirect(name) {
//     navigate(`survey/${name}`);
//   }

//   return(
//     <div className="w-full px-14">
//       <h3 className="w-full text-center py-4 border-b">다양한 친구들과 대화해보세요!</h3>
//       <div className="flex justify-center items-center w-full gap-4 py-5">
//         <NPC name='스펙이' image={lion} clickHandler={() => redirect('스펙이')} />
//         <NPC name='취향이' image={scorpion} clickHandler={() => redirect('취향이')} />
//         <NPC name='관심이' image={goat} clickHandler={() => redirect('관심이')} />
//       </div>
//     </div>
//   )
// }


function HeaderTest({user}) {
  
  return (
    <div className="w-full flex flex-col justify-start px-5">
      <h1 className="text-3xl font-bold">Hello, {user?.name}</h1>
      <p>오늘은 어떤 내용을 적을까요?</p>
    </div>
  )
}

const categories = [
  {
    category: '오늘의 질문',
    function: () => {}
  },
  {
    category: 'NPC질문',
    function: () => {}
  },
  {
    category: '직무/회사',
    function: () => {}
  },
  {
    category: '관심 키워드',
    function: () => {}
  },
  {
    category: '키워드 분석',
    function: () => {}
  },

]

function Categories() {
  const [selected, setSelected] = useState('');


  
  return (
    <ul className="flex overflow-auto w-full gap-3 py-2 px-4 text-nowrap">
      {
        categories.map((item, idx) => {
          return (
            <li key={idx}>
              <button className={`w-full h-full p-3 shadow-md rounded-lg ${selected === item.category ? "bg-white text-black" : "bg-[#303030]"}`} onClick={() => {setSelected(item.category)}}>{item.category}</button></li>
          )
        })
      }
    </ul>
  )
}

function MainCard() {
  return (
    <Link to="survey/취향이" className="w-[300px] min-w-[300px] h-[450px] text-black font-bold text-xl rounded-2xl relative bg-[#e0f2ff] flex justify-center items-center">
      <div className="flex absolute top-0 left-0 w-full justify-between p-5">
        <h1>오늘의 질문</h1>
        <button>
          <img src={plus_square} alt="" />
        </button>
      </div>
      <img src={horse3d} alt='Main Character' />
    </Link>
  )
}

function GraphCard() {
  return (
    <Link to="survey/취향이" className="w-[300px] min-w-[300px] h-[450px] text-black font-bold text-xl rounded-2xl relative bg-[#e0f2ff] flex justify-center items-center">
      <div className="flex absolute top-0 left-0 w-full justify-between p-5">
        <h1>오늘의 질문</h1>
        <button>
          <img src={plus_square} alt="" />
        </button>
      </div>
      <Radar data={data}/>
    </Link>
  )
}

function NPCCard() {
  return (
    <Link to="survey/취향이" className="w-[300px] min-w-[300px] h-[450px] text-black font-bold text-xl rounded-2xl relative bg-[#e0f2ff] flex justify-center items-center">
      <div className="flex absolute top-0 left-0 w-full justify-between p-5">
        <h1>NPC 질문</h1>
        <button>
          <img src={plus_square} alt="" />
        </button>
      </div>
      
      <div>
        <img src={scorpion} className="w-[50px]" alt="" />
        <img src={lion} className="w-[50px]" alt="" />
        <img src={goat} className="w-[50px]" alt="" />
        
      </div>
    </Link>
  )
}

function CardContainer() {
  return (
    <div className="py-4 px-10 flex w-full  overflow-auto gap-5">
      <MainCard />
      <NPCCard />
      <GraphCard />
    </div>
  )
}

export function MainPage() {
  const [user, setUser] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    if(localStorage.getItem('pocketbase_auth')) {
      const currentUser = JSON.parse(localStorage.getItem('pocketbase_auth'));
      setUser(currentUser.model);
    }
  }, [])


  return (
    <div className="bg-[#181818] text-white relative w-full h-full overflow-auto">
      <Header clickHandler2={() => navigate('settings')}/>
      <div
        className="w-full py-5 flex flex-col items-center justify-center gap-4">
        <HeaderTest user={user}/>
        <Categories />
        <CardContainer />
        {/* <NPCContainer/> */}
      </div>
      {/* <WorkPref/>
      <KeywordPref/> */}
      <Outlet/>
    </div>
  )
}