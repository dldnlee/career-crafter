import { ProgressBar } from "src/components"



export function NPCProgress({percentage, charImg, charName}) {
  return (
    <div className='flex items-center pr-5 gap-4'>
      <img src={charImg} alt="" className='size-[40px]'/>
      <div className='w-full flex flex-col gap-2'>
        <p className='text-white flex justify-between'>{charName}<span>{percentage}%</span></p>
        <ProgressBar percentage={percentage}/>
      </div>
    </div>
  )
}