import 'ldrs/bouncy';

export function Loader({active}) {

  return (
    <div className={` ${active ? 'fixed' : 'none'} backdrop-blur-md z-10 top-0 left-0 w-full h-full flex justify-center items-center `}>
      <div className='p-12 bg-primary-bg rounded-2xl flex justify-center flex-col gap-10 items-center'>
        <l-bouncy
          size="60"
          speed="1.75"
          color="white" 
        ></l-bouncy>
        <h1 className='animate-pulse text-white'>로딩중...</h1>
      </div>
    </div>
  )
}