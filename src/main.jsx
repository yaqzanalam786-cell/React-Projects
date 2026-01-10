import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import {store} from './Store/Store.js'
import './index.css'
import App from './App.jsx'
import AuthLayout from './Components/AuthLayout.jsx'
import LoginPg from './Pages/LoginPg.jsx'
import SignUpPg from './Pages/SignUpPg.jsx'
import Home from './Pages/Home.jsx'
import Profile from './Pages/Profile.jsx'
import AddPost from './Pages/AddPost.jsx'
import Post from './Pages/Post.jsx'
import EditPost from './Pages/EditPost.jsx'


const router = createBrowserRouter([
  {
    path : '/login', 
    element: (
                <AuthLayout authentication={false}>
                    <LoginPg />
                </AuthLayout>
            ),
  },           
  {
          path: "/signup",
          element: (
              <AuthLayout authentication={false}>
                  <SignUpPg />
              </AuthLayout>
          ),
  },
  {
    path: "/",
    element: (
      <AuthLayout authentication>
        <App />
      </AuthLayout> 
      ),
      children : [
        {
      path : '/',
      element : <Home/>, 
        },
         {
            path: "/profile",
            element: (
              <Profile />
            ),
          },
                
          {
              path: "/add-post",
              element: (
                <AddPost />
              ),
          },
                 
          {
              path: "/edit-post/:$id",
              element: (
                <EditPost/>
              ),
          },
               
          {
              path: "/post/:$id",
              element: <Post />,
          },
        ]
    },
  ])
createRoot(document.getElementById('root')).render(
    <StrictMode>
      <Provider store = {store}>
      < RouterProvider router={router} /> 
      </Provider>
    </StrictMode>,
  )
                
               
                
                   
                

  
