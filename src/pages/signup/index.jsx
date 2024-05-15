import { Outlet } from "react-router-dom";


export {Form} from './Form'
export {InitialQuestions} from './InitialQuestions'
export {Tutorial} from './Tutorial'
export {CompleteSignup} from './CompleteSignup'

export function SignupPage() {

  return (
    <div className="w-full h-full">
      <Outlet />
    </div>
  )
}