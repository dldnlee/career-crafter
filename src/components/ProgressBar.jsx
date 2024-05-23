
export function ProgressBar({percentage}) {
  return (
    <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
      <div 
        style={{ width: `${percentage}%` }}
        className={`bg-point-color h-1.5 rounded-full dark:bg-point-color`} ></div>
    </div>
  )
}