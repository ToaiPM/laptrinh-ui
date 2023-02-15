//Layout
import DefaultLayout from "~/components/Layouts/DefaultLayout"
import HeaderOnly from "~/components/Layouts/HeaderOnly"


//Pages
import Home from "~/pages/Home"
import Products from "~/pages/Products"
import Upload from "~/pages/Upload"
const publicRouter = [
    { path: '/', component: Home, layout: DefaultLayout },
    { path: '/products', component: Products, layout: HeaderOnly },
    { path: '/upload', component: Upload, layout: null },
]
export { publicRouter }