import arrowLeft from '/src/assets/arrowLeft.png';


export function QuestionsIndex({btnPrevEvent, btnNextEvent, index}) {

  return (
    <div className='w-full flex justify-between py-10'>
      <button type='button' onClick={btnPrevEvent} className='invert'>
        <img src={arrowLeft} alt="" />
      </button>
      <p>{index+1}/6</p>
      <button type='button' onClick={btnNextEvent} className='invert'>
        <img src={arrowLeft} alt="" className='rotate-180'/>
      </button>
    </div>
  )
}