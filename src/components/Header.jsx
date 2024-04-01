import users from 'src/assets/users.png'
import settings from 'src/assets/settings.png'


export default function Header() {
  return (
    <div className='sticky top-0 left-0 flex justify-between p-5 items-center w-full bg-white'>
      <img src={users} alt="사람" />
      <p className='font-bold'>CareerCrafter</p>
      <img src={settings} alt="톱니바퀴" />
    </div>
  )
}