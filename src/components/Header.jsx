import settings from 'src/assets/settings.png'


export default function Header({clickHandler2}) {
  return (
    <div className='sticky top-0 left-0 flex justify-between p-5 pb-0 items-center w-full bg-[#181818] text-white z-100'>
      {/* <p className='font-bold'>CareerCrafter</p> */}
      <div className='w-full pr-5'>
        <p>나의 답변 현황: 50%</p>
        <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
          <div className="bg-blue-600 h-1.5 rounded-full dark:bg-blue-500 w-1/2" ></div>
        </div>
      </div>
      <button onClick={clickHandler2}>
        <img src={settings} alt="톱니바퀴" className='invert'/>
      </button>
    </div>
  )
}