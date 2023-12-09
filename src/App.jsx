import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Root } from './Root'
import { ErrorPage } from './components/pages/ErrorPage/ErrorPage'
import Home from './components/pages/Home/Home'
import { Favourites } from './components/pages/Favourites/Favourites'

const routerExample = createBrowserRouter([
  {
    path:"/",
    element:<Root/>,
    errorElement:<ErrorPage/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/fav",
        element:<Favourites/>
      }

    ]

  }
])
function App() {
  return (
    <RouterProvider router={routerExample}/>
  )
}

export default App
