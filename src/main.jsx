import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import MemoryApp from './memory-game/App'
import App from './App'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import NavBar from './Navigation/NavBar';
import UndoCounter from './undoable-counter/App'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },{
    path: "/memory-game",
    element: <MemoryApp />,
  },
  {
    path: "/undoable-counter",
    element: <UndoCounter />,
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NavBar />
    <RouterProvider router={router} />
  </StrictMode>,
)
