import { createBrowserRouter } from "react-router-dom";
import App from "../App"
import Category from "../views/Category.js"
import ItemView from "../views/ItemView.js"

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />
    },
    {
        path: '/category/:id',
        element: <Category />
    },
    {
        path: '/category/item/:id',
        element: <ItemView />
    }
])