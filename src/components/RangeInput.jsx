


export function RangeInput({id, question, onChangeFn}) {
  return (
    <label htmlFor={id} className='relative flex flex-col gap-6'>
      <h3>{question}</h3>
      <div className='w-full flex flex-col gap-2'>
        <div className='w-full justify-between flex text-sm font-semibold'>
          <p>매우 싫다</p>
          <p>보통</p>
          <p>매우 만족</p>
        </div>
        <div className='w-full px-5 py-2 relative flex justify-center items-center'>
          <input
            type="range"
            id={id}
            min={1}
            max={5}
            defaultValue={3}
            className="w-full h-1 relative bg-gray-200 rounded-lg appearance-none cursor-pointer"
            onChange={onChangeFn}/>
        </div>
      </div>
    </label>
  )
}