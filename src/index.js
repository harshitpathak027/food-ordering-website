import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import About from './components/About';
import Error from './components/Error';
import Contact from './components/Contact';
import Body from './components/Body';
import RestaurantMenu from './components/RestaurantMenu';
import Cart from './components/Cart';



const Instamart = lazy(()=>import("./components/Instamart"))

const appRouter= createBrowserRouter([
  
  {
    path:"/",
    element:<App/>,
    errorElement:<Error/>,
    children:[
      {
      path:"/about",
      element:<About/>
      },
      {
        path:"/",
        element:<Body/>
        },
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"/instamart",
        element:(
          <Suspense>
          <Instamart/>
          </Suspense>
        ),
      },
      {
        path:"/cart",
        element:(
          
          <Cart/>
          
        ),
      },
      {
        path:"/restaurant/:id",
        element:<RestaurantMenu/>
      }
    ]
  },

])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={appRouter}/>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
