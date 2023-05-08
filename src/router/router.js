import ContactForm from "../components/ContactForm";
import Home from "../components/Home";
import View from "../components/About";
import About from "../components/About";
import Login from "../pages/Login";

const  routerList = [
    {
        path:'/',
        Component: Home,
        isProtected: true,
    },
    {
        path:'/about',
        Component: About,
        isProtected: true,
    },
    {
        path:'/contact',
        Component: ContactForm,
        isProtected: true,
    },
    {
        path:'/login',
        Component: Login,
        isProtected: false
    }
]

export default routerList;