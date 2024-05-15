import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y } from 'swiper/modules';
import { useState, useRef, useCallback } from 'react';
import { initQuestions} from '/src/data/';
import { SubmitBtn, QuestionsIndex, Questions, InitGuide } from './components/';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


export function InitialQuestions() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef(null);

  const handlePrev = useCallback(() => {
    if(!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, [])

  const handleNext = useCallback(() => {
    if(!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  return (
    <div className='w-full h-full bg-white flex flex-col items-center'>
      <div className='w-full px-6 flex flex-col gap-14'>
        <div>
          <QuestionsIndex btnPrevEvent={handlePrev} btnNextEvent={handleNext} index={activeIndex} />
          <Swiper
            style={{
              "--swiper-pagination-bullet-inactive-color": "#999999",
            }}
            modules={[Pagination, A11y]}
            spaceBetween={20}
            slidesPerView={1}
            ref={sliderRef}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            pagination={{
              type: 'progressbar'
            }}
            centeredSlides={true}
            className="w-full h-fit"
            >
              {
                initQuestions.map((item, index) => {
                  return (
                    <SwiperSlide key={index}>
                      <Questions 
                      question={item.question}
                      option1={item.option1}
                      option2={item.option2}
                      index={index}
                      />
                    </SwiperSlide>
                  )
                })
              }
          </Swiper>
        </div>
        <SubmitBtn index={activeIndex}/>
      </div>
      <InitGuide />
    </div>
  )
}