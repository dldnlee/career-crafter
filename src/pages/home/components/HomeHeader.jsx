
export function HomeHeader({user}) {
  return (
    <div className="w-full flex flex-col justify-start px-5">
      <h1 className="text-3xl font-bold">Hello, {user?.name}</h1>
      <p>오늘은 어떤 내용을 작성할까요?</p>
    </div>
  )
}