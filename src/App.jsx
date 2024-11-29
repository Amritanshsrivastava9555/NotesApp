import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css'
import {createBrowserRouter , RouterProvider } from 'react-router-dom'
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Paste from './Components/Paste';
import ViewPaste from './Components/ViewPaste';

const router = createBrowserRouter(
  [
    {
      path: "/",
      element:
      <div>
        <Navbar />
        <Home />
      </div>
    },
    {
      path: "/pastes",
      element:
      <div>
        <Navbar />
        <Paste />
      </div>
    },
    {
      path: "/pastes/:id",
      element:
      <div>
        <Navbar />
        <ViewPaste />
      </div>
    }
  ]
)

function App() {
  return(
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App