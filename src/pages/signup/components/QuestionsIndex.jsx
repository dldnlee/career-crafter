import arrowLeft from '/src/assets/arrowLeft.png';


export function QuestionsIndex({index, swiperRef}) {
  
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