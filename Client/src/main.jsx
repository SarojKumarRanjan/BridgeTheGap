import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from './lib/ThemeProvider.jsx'
import store from "./store/store.js"
import { Provider } from'react-redux'
import { createBrowserRouter ,RouterProvider} from 'react-router-dom'

import 
{
  Home,
  Contact,
  About,
  Login,
  Signup,
  Ngopage,
  Post,
  NgoDashboard,
  
  UserProfile,
  NgoProfilePage,
  PostPage,
  CreatePost,
  NgoPublicProfile,
  UserPublicProfile

} from "./Pages/index.js"
import NgoSignup from "./components/NgoSignup.jsx"
import NgoLogin from "./components/NgoLogin.jsx"



const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
      children: [
        {
          path: '',
          element: <Home />
        },
        {
          path: 'explore-ngo',
          element: <Ngopage />,
          children:[
           
          ]
        },
        {
          path: 'post',
          element: <Post />,
          
        },
        {
          path: 'about',
          element: <About />
        },
        {
          path: 'contact',
          element: <Contact />
        },
        {
          path: 'login',
          element: <Login />
        },
        {
          path: 'signup',
          element: <Signup />
        },
        {
          path: 'ngo-signup',
          element: <NgoSignup />
        },{
          path: 'ngo-login',
          element: <NgoLogin />
        },
        {
          path: 'ngo-dashboard',
          element: <NgoDashboard />
        },
        {
          path: 'profile/:id',
          element: <UserProfile />
        },
        {
          path: 'ngo-profile/:id',
          element: <NgoProfilePage />
        },
        {
          path: 'post/:id',
          element: <PostPage />
        },
        {
          path: 'post/create',
          element: <CreatePost />
        },
        {
          path: ':id',
          element: <NgoPublicProfile />
        },
        {
          path: 'userprofile/:id',
          element: <UserPublicProfile />
        }
      ]
    }
  ]
)




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
    </ThemeProvider>
  </React.StrictMode>,
)
