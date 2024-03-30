import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import sample_char from 'src/assets/sample_char.png';





export function LandingPage() {
  const navigate = useNavigate();
  useEffect(() => {
    
    setTimeout(() => {
      navigate('/access', 2);
    }, 2000)
  }, [])
  
  return (
    <div className='w-full h-full flex flex-col items-center justify-center '>
      <h1 className='text-3xl font-extrabold mb-[50px]'>Career Crafter</h1>
      <img src={sample_char} alt="" className='w-[140px]'/>
    </div>
  )
}