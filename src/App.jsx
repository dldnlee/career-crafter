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
  CommunityPage, 
  Ranking, 
  HomePage,
  Friends,
  QuestionsPage,
  CompletePage } from './pages'
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
            index: true,
            element: <HomePage/>
          },
          {
            path: 'settings',
            element: <SettingsPage/>
          },
          {
            path: 'survey/:category',
            element: <SurveyPage />
          },
          {
            path: 'community',
            element: <CommunityPage />,
            children: [
              {
                index: true,
                element: <Ranking/>
              },
              {
                path: 'friends',
                element: <Friends />
              }
            ]
          }
        ]  
      }
    ]
  },
  {
    path: 'questions/:category',
    element: <QuestionsPage/>
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
  },
  {
    path: 'complete',
    element: <CompletePage />
  }
])

function App() {
  return (
    <div className='relative mx-auto w-screen h-screen max-w-[400px] max-h-[900px]'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
