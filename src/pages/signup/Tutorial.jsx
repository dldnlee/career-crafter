import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, A11y } from "swiper/modules"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import tutorial1 from 'src/assets/tutorial1.png'
import tutorial2 from 'src/assets/tutorial2.png'
import tutorial3 from 'src/assets/tutorial3.png'
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
      <div className="w-full pl-6">
        <h1 className="text-lg font-semibold">{topText}<br></br>{btmText}</h1>
        <p className="text-[12px] text-gray-400">{noteText}</p>
      </div>
      <img src={imgSrc} alt={topText + btmText} />
    </div>

  )
}

function NavigateBtn({index}) {
  const [active, setActive] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
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
              imgSrc={tutorial1}
            />
          </SwiperSlide>
          <SwiperSlide>
            <TutorialCard 
              topText={'데이터 분석 기반'}
              btmText={'직무 추천을 받을 수 있어요!'}
              noteText={'직무/회사 추천'}
              imgSrc={tutorial2}
            />
          </SwiperSlide>
          <SwiperSlide>
            <TutorialCard 
              topText={'다른 사람들의'}
              btmText={'진로 준비도를 확인해봐요!'}
              noteText={'커뮤니티'}
              imgSrc={tutorial3}
            />
          </SwiperSlide>
      </Swiper>
      <div className="w-full px-10">
        <NavigateBtn index={activeIndex}/>
      </div>
    </div>
  )
}