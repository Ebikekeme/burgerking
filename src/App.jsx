import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Home } from "./components/Home"
import { Order } from "./components/Order"
import Menu from "./components/Menu"
// import { Modal } from "@material-ui/core";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/order",
    element: <Order/>,
  },
  // {
  //   path: "/modal",
  //   element: <Modal/>,
  // },
  {
    path: "/menu",
    element: <Menu/>,
  },
]);

 
function App(){
  return <RouterProvider router={router}/>
}


export default App