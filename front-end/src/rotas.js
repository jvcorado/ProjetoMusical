import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { Favoritos } from "./pages/Favoritos";

export const Router = createBrowserRouter([
    {
        path:'/',
        element: <Home></Home>
    },
    {
        path:'/favoritos',
        element: <Favoritos></Favoritos>
    }
])