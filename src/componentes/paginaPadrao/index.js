import { Outlet } from "react-router-dom"
import Banner from "../banner/index.js"
export default function PaginaPadrao(){
    return(
        <main>
            <Banner/>
            <Outlet/>
        </main>
    )
}