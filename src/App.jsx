import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { 
  ErrorPage, 
  RootLayout, 
  LandingPage, 
  MainPage, 
  LoginPage, 
  SignupPage } from './pages'
import './index.css'
import { AccessPage } from './pages/AccessPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout/>,
    error: <ErrorPage/>,
    children: [
      {
        index: true,
        element: <MainPage/>
      },
      {
        path: 'main',
        element: <MainPage/> 
      }
    ]
  },
  {
    path: 'access',
    element: <AccessPage/>
  },
  {
    path: 'landing',
    element: <LandingPage/>,
  },
  {
    path: 'login',
    element: <LoginPage/>
  },
  {
    path: 'signup',
    element: <SignupPage/>
  }
])

function App() {
  return (
    <div className='w-screen h-screen'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
