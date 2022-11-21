import './App.scss'
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'
import MainPage from './pages/main-page'
import ExercisePage from './pages/exercise-page'
import RoutinePage from './pages/routine-page'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
  },
  {
    path: '/routine',
    element: <RoutinePage />,
  },
  {
    path: '/exercise',
    element: <ExercisePage />,
  },
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App
