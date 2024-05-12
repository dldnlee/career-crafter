import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Pagination, A11y } from 'swiper/modules';
import { useEffect, useState } from 'react';
import unchecked from '/src/assets/unchecked.png';
import checked from '/src/assets/checked.png';
import arrowLeft from '/src/assets/arrowLeft.png';
import { initQuestions, initStats, pb, signupData, initAnswers  } from '/src/data/';
import { useAtom, useAtomValue } from 'jotai';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useNavigate } from 'react-router-dom';

function Questions({question, option1, option2, index}) {
  const [highlight, setHighlight] = useState(0);
  const [stats, setStats] = useAtom(initStats);
  const swiper = useSwiper();

  function optionOneHandler() {
    setHighlight(1);
    stats[index] = 2;
    swiper.slideNext();
    setStats(stats);
    console.log(stats);
  }
  function optionTwoHandler() {
    setHighlight(2)
    stats[index] = 5
    swiper.slideNext();
    setStats(stats);
    console.log(stats);
  }

  return (
    <div className='w-full flex flex-col justify-center items-center'>
      <h1 className='text-2xl font-semibold py-14'>{question}</h1>
      <div className='w-full flex flex-col gap-4'>
        <button 
          type='button' 
          onClick={optionOneHandler}
          className={`px-5 py-5 rounded-lg flex gap-5 ${highlight === 1 ? 'bg-point-color' : 'bg-gray-200'}`}>
          <img src={highlight === 1 ? checked : unchecked} alt="" className={`size-7 ${highlight === 1 ? 'invert' : ''}`} />
          <p className={`font-semibold ${highlight === 1 ? 'text-white' : 'text-black'}`}>{option1}</p>
        </button>
        <button 
          type='button' 
          onClick={optionTwoHandler}
          className={`px-5 py-5 rounded-lg flex gap-5 ${highlight === 2 ? 'bg-point-color' : 'bg-gray-200'}`}>
          <img src={highlight === 2 ? checked : unchecked} alt="" className={`size-7 ${highlight === 2 ? 'invert' : ''}`} />
          <p className={`font-semibold ${highlight === 2 ? 'text-white' : 'text-black'}`}>{option2}</p>
        </button>
      </div>
    </div>
  )
}

function SubmitBtn({index}) {
  const [visible, setVisible] = useState(false);
  const stats = useAtomValue(initStats);
  const userData = useAtomValue(signupData);
  const navigate = useNavigate();


  useEffect(() => {
    if(index === 4) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [index])
  
  async function clickHandler() {
    let signupData;
    signupData = {...userData};
    signupData.initstats = JSON.stringify(stats);
    console.log(signupData);

    

    try {
      const record = await pb.collection('users').create(signupData);
      await pb.collection('users').authWithPassword(signupData.email, signupData.password);
      const answerData = {
        'user': record.id,
        "outgoing": JSON.stringify(initAnswers),
        "challenging": JSON.stringify(initAnswers),
        "regularity": JSON.stringify(initAnswers),
        "action": JSON.stringify(initAnswers),
        "readiness": JSON.stringify(initAnswers)
      }
      await pb.collection('answers').create(answerData);
      navigate('/main');
    } catch {
      console.log('register failed');
    }
  }

  return (
    <button 
      onClick={clickHandler}
      type='button'
      className={`w-full bg-black text-white py-2 ${visible ? 'block' : 'invisible'} rounded-full`}>다음</button>
  )
}

function QuestionsIndex({index, swiperRef}) {
  
  function prevIndex() {
    if(index>=0) {
      swiperRef.slidePrev();
    } else {
      return;
    }
  }

  function nextIndex() {
    if(index<=5) {
      swiperRef.slideNext();
    } else {
      return;
    }
    
  }

  return (
    <div className='w-full flex justify-between py-10'>
      <button type='button' onClick={prevIndex}>
        <img src={arrowLeft} alt="" />
      </button>
      <p>{index+1}/5</p>
      <button type='button' onClick={nextIndex}>
        <img src={arrowLeft} alt="" className='rotate-180'/>
      </button>
    </div>
  )
}

export function InitialQuestions() {
  const [swiperRef, setSwiperRef] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className='w-full h-full bg-white flex flex-col pt-20 items-center'>
      <div className='w-full px-6 flex flex-col gap-14'>
        <div>
          <QuestionsIndex index={activeIndex} swiperRer={swiperRef} />
          <Swiper
            style={{
              "--swiper-pagination-bullet-inactive-color": "#999999",
            }}
            modules={[Pagination, A11y]}
            spaceBetween={20}
            slidesPerView={1}
            onSwiper={setSwiperRef}
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
    </div>
  )
}