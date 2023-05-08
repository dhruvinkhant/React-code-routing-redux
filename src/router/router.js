import ContactForm from "../components/ContactForm";
import Home from "../components/Home";
import About from "../components/About";
import Login from "../pages/Login";
import Counter from "../components/Counter";

const  routerList = [
    {
        path:'/login',
        Component: Login,
        isProtected: false
    },
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
        path:'/counter',
        Component: Counter,
        isProtected: true

    }
]

export default routerList;