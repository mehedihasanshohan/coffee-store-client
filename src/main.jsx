import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter,
  RouterProvider } from 'react-router'
import AddCoffee from './components/AddCoffee.jsx'
import UpdateCoffee from './components/UpdateCoffee.jsx'
import SignIn from './components/SignIn.jsx'
import SignUp from './components/SignUp.jsx'
import AuthProviders from './providers/AuthProviders.jsx'
import Users from './components/Users.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    loader: () => fetch('http://localhost:5000/coffee')
  },
  {
    path: 'addcoffee',
    element: <AddCoffee></AddCoffee>,
  },
  {
    path: 'updateCoffee/:id',
    element: <UpdateCoffee></UpdateCoffee>,
    loader: ({params}) => fetch(`http://localhost:5000/coffee/${params.id}`)
  },
  {
    path: '/signin',
    element: <SignIn></SignIn>
  },
  {
    path: '/signup',
    element: <SignUp></SignUp>
  },
  {
    path: '/users',
    element: <Users></Users>
  }
]);

  createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProviders>
     <RouterProvider router={router}></RouterProvider>
    </AuthProviders>
  </StrictMode>,
)
