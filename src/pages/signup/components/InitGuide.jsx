
import { useState } from 'react'
import whiteCharacter from '/src/assets/whiteCharacter.svg'

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
    className={`${active ? 'absolute' : 'hidden'} w-full h-full backdrop-blur-sm z-10 overflow-hidden`}>
        <p className='absolute bottom-[600px] text-sm right-20 bg-point-color text-white p-4 rounded-s-xl rounded-tr-xl'>{guideText[textIndex]}</p>
        <img src={whiteCharacter} alt="하얀색 귀여운 캐릭터" className='size-[200px] -rotate-12 absolute top-60 -right-16'/>
    </button>
  )
}