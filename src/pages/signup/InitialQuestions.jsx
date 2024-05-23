import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y } from 'swiper/modules';
import { useState, useRef, useCallback } from 'react';
import { initQuestions, jobKeywords, userKeywords } from '/src/data/';
import { SubmitBtn, QuestionsIndex, Questions, InitGuide } from './components/';
import { removeItem } from 'src/util';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useAtom } from 'jotai';


export function InitialQuestions() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [keywords, setKeywords] = useAtom(userKeywords)

  const sliderRef = useRef(null);

  const handlePrev = useCallback(() => {
    if(!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, [])

  const handleNext = useCallback(() => {
    if(!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  function buttonHandler(item) {
    const newKeywords = [...keywords];
    if(newKeywords.includes(item)) {
      setKeywords(removeItem(newKeywords, item));
    } else {
      newKeywords.push(item)
      setKeywords(newKeywords);
    }
    console.log(keywords);
  }

  return (
    <div className='w-full h-full bg-primary-bg text-white flex flex-col items-center'>
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
              <SwiperSlide>
                <div className='w-full flex flex-col justify-center items-center'>
                  <h1 className='text-2xl text-center font-semibold py-14'>키워드 5개를 선택 해주세요!</h1>
                  <div className='w-full h-[400px] flex flex-wrap gap-2 justify-center overflow-y-auto'>
                    {
                      jobKeywords.map((item) => (
                        <button 
                        onClick={() => buttonHandler(item)}
                        key={item}
                        className='bg-white w-fit text-black h-[40px] py-2 px-4 rounded-full'>{item}</button>
                      ))
                    }
                  </div>
                </div>
              </SwiperSlide>

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