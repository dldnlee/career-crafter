import sample_char from 'src/assets/sample_char.png';

export function LoginPage() {
  return (
    <div className='w-full h-full flex flex-col justify-center items-center gap-8'>
      <div className='flex flex-col items-center justify-center '>
        <h1 className='text-3xl font-extrabold mb-[10px]'>Career Crafter</h1>
        <img src={sample_char} alt="" className='w-[140px]'/>
      </div>
      <form action="/main" className="flex flex-col w-full px-12 gap-4 justify-center items-center">
        <label htmlFor="email" className='sr-only'>이메일</label>
        <input 
          type="email" 
          id='email'
          placeholder='이메일 입력'
          className="bg-gray-200 px-3 py-3 w-full text-l rounded-md focus:outline-black"/>
        <label htmlFor="password" className='sr-only '>비밀번호</label>
        <input 
          id='password'
          type="password" 
          placeholder='비밀번호 입력'
          className="bg-gray-200 px-3 py-3 w-full text-l rounded-md focus:outline-black"/>
        <button className="w-full py-3 text-center border border-black hover:bg-black hover:text-white">Login</button>
      </form>
    </div>
  )
}