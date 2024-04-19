import settings from 'src/assets/settings.png'


export default function Header({clickHandler2}) {
  return (
    <div className='sticky top-0 left-0 flex justify-between p-5 items-center w-full bg-black z-100'>
      <p className='font-bold'>CareerCrafter</p>
      <button onClick={clickHandler2}>
        <img src={settings} alt="톱니바퀴" className='invert'/>
      </button>
    </div>
  )
}