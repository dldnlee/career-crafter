import users from 'src/assets/users.png'
import settings from 'src/assets/settings.png'


export default function Header({clickHandler1, clickHandler2}) {
  return (
    <div className='sticky top-0 left-0 flex justify-between p-5 items-center w-full bg-white z-100'>
      <button onClick={clickHandler1}>
        <img src={users} alt="사람" />
      </button>
      <p className='font-bold'>CareerCrafter</p>
      <button onClick={clickHandler2}>
        <img src={settings} alt="톱니바퀴" />
      </button>
    </div>
  )
}