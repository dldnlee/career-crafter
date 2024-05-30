

export function Keyword({text, bgColor}) {

  return (
    <p 
      className={`px-4 py-1 mr-2 mb-2 inline-block text-white text-[12px] font-semibold w-fit flex-shrink-0 rounded-full ${bgColor}`}>{text}</p>
  )
}