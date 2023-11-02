import { createBrowserRouter } from "react-router-dom";
import App from "../App"
import Category from "../views/Category.js"
import ItemView from "../views/ItemView.js"
import ItemDetailView from "../views/ItemDetailView";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />
    },
    {
        path: '/category/:category',
        element: <Category />
    },
    {
        path: '/category/item/:id',
        element: <ItemView />
    },
    {
        path: '/detail/:id',
        element: <ItemDetailView />
    }
])