import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, A11y } from "swiper/modules"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import prefChar from 'src/assets/prefChar.svg'
import biasChar from 'src/assets/biasChar.svg'
import specChar from 'src/assets/specChar.svg'
import { HeaderWithBack } from "/src/components"

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useAtomValue } from "jotai"
import { signupData } from "../../data"

function TutorialCard({topText, btmText, noteText, imgSrc}) {
  return (
    <div className="flex flex-col gap-8 w-full h-full items-center">
      <div>
        <h1 className="text-lg font-semibold">{topText}<br></br>{btmText}</h1>
        <p className="text-[12px] text-gray-400">{noteText}</p>
      </div>
      <div className="w-[300px] h-[300px] bg-white rounded-2xl flex justify-center items-center">
        <img src={imgSrc} alt="" className="size-[50%]" />
      </div>
    </div>

  )
}

function NavigateBtn({index}) {
  const [active, setActive] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // console.log(swiperRef.activeIndex);
    if(index === 2) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [index])

  function clickHandler(){
    navigate('/signup/initial')
  }

  return (
    <button
      type='button'
      onClick={clickHandler}
      className={`w-full bg-point-color hover:bg-point-color/60 py-2 rounded-full ${active ? 'block' : 'invisible'}`}>다음</button>
  )
}

export function Tutorial() {
  const [, setSwiperRef] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const userInfo = useAtomValue(signupData);

  useEffect(() => {
    console.log(userInfo);
  }, [])

  return (
    <div className="text-white w-full h-full bg-primary-bg flex flex-col items-center gap-6 justify-center">
      <HeaderWithBack />
      <Swiper
        style={{
          "--swiper-pagination-bullet-inactive-color": "#999999"
        }}
        modules={[Pagination, A11y]}
        spaceBetween={0}
        slidesPerView={1}
        onSwiper={setSwiperRef}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        pagination={true}
        centeredSlides={true}
        className="w-full h-[70%]"
        >
          <SwiperSlide>
            <TutorialCard 
              topText={'매일 질문 답변을 통해'}
              btmText={'나의 커리어를 찾아봐요!'}
              noteText={'오늘의 질문, NPC 질문, 나의 직무 상황, 관심 키워드'}
              imgSrc={prefChar}
            />
          </SwiperSlide>
          <SwiperSlide>
            <TutorialCard 
              topText={'매일 질문 답변을 통해'}
              btmText={'나의 커리어를 찾아봐요!'}
              noteText={'오늘의 질문, NPC 질문, 나의 직무 상황, 관심 키워드'}
              imgSrc={biasChar}
            />
          </SwiperSlide>
          <SwiperSlide>
            <TutorialCard 
              topText={'매일 질문 답변을 통해'}
              btmText={'나의 커리어를 찾아봐요!'}
              noteText={'오늘의 질문, NPC 질문, 나의 직무 상황, 관심 키워드'}
              imgSrc={specChar}
            />
          </SwiperSlide>
      </Swiper>
      <div className="w-full px-10">
        <NavigateBtn index={activeIndex}/>
      </div>
    </div>
  )
}