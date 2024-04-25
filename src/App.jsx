import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'
import { 
  ErrorPage, 
  RootLayout, 
  LandingPage, 
  MainPage, 
  LoginPage, 
  SignupPage,
  SettingsPage,
  SurveyPage,
  CommunityPage } from './pages'
import { AccessPage } from './pages/AccessPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout/>,
    error: <ErrorPage/>,
    children: [
      {
        index: true,
        element: <LandingPage/>
      },
      {
        path: 'main',
        element: <MainPage/>,
        children: [
          {
            path: 'settings',
            element: <SettingsPage/>
          },
          {
            path: 'survey/:category',
            element: <SurveyPage />
          }
        ]  
      },
      {
        path: 'community',
        element: <CommunityPage />
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
