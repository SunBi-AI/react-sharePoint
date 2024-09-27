import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Posts, { loader as postsLoader } from './routes/Posts'
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RootLayout from './routes/RootLayout';
import NewPost, {action as newpostAction} from './routes/NewPost';
import PostDetails, {loader as postDetailsLoader} from './routes/PostDetails';


const router = createBrowserRouter([
  { path : '/', 
    element: <RootLayout/>, 
    children: [
      { path: '/', 
        element: <Posts/>, 

        //use loader to fetchd data before the route renders to pre-load necessary data for a component
        loader: postsLoader,

        children: [
        { path: 'create-post', 
          element: <NewPost/>,

          //action prop is tied to form submissions or interations like posting data to the server.
          action: newpostAction,
        },
        {path: '/:id', element: <PostDetails/>, loader: postDetailsLoader}
    ]}, //our-domain
  ]},
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
