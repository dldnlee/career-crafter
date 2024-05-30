import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'
import { 
  ErrorPage, 
  RootLayout, 
  LandingPage, 
  MainPage, 
  LoginPage, 
  SignupPage,
  Tutorial,
  InitialQuestions,
  Form,
  CommunityPage, 
  Ranking, 
  HomePage,
  Friends,
  QuestionsPage,
  CompletePage,
  ResultPage,
  CompleteSignup,
  Board,
  NPCPage,
  GraphPage
} from './pages'
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
              },
              {
                path: 'board',
                element: <Board />
              }
            ]
          }
        ]  
      }
    ]
  },
  {
    path: 'npc',
    element: <NPCPage />
  },
  {
    path: 'graph',
    element: <GraphPage />
  },
  {
    path: 'result',
    element: <ResultPage />
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
    element: (
    <SignupPage/>),
    children: [
      {
        index:true,
        element : <Form/>
      },
      {
        path: 'tutorial',
        element: <Tutorial />
      },
      {
        path: 'initial',
        element: <InitialQuestions />
      },
      {
        path: 'complete',
        element: <CompleteSignup /> 
      }
    ]
  },
  {
    path: 'complete',
    element: <CompletePage />
  },
])

function App() {
  return (
    <div className='relative mx-auto w-screen h-svh max-w-[400px] bg-primary-bg max-h-[900px]'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
