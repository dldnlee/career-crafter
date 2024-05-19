
import { useState } from 'react'
import initGuide from '/src/assets/initGuide.svg'

const guideText = [
  '간단한 질문에 답변해주세요',
  '기본적인 성향을 알아보기 위한 용도이니 편하게 답변해주세요'
]

export function InitGuide() {
  const [active, setActive] = useState(true);
  const [textIndex, setTextIndex] = useState(0);

  function clickHandler() {

    if(textIndex === (guideText.length - 1)) {
      setActive(false);
    }

    setTextIndex(textIndex + 1);
    console.log('hello');
  }

  return (
    <button 
    onClick={clickHandler}
    className={`${active ? 'absolute' : 'hidden'} w-full h-full backdrop-blur-sm bg-black bg-opacity-30 z-10 overflow-hidden`}>
        <div className='absolute right-0 top-[20%] w-fit flex gap-3 flex-col items-end'>
          <p className='bg-point-color text-white max-w-[60%] p-3 rounded-2xl rounded-br-none mr-10'>{guideText[textIndex]}</p>
          <img src={initGuide} alt="하얀색 귀여운 캐릭터" className='size-[150px]'/>
        </div>
    </button>
  )
}