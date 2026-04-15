import { Outlet } from "react-router";
import Header from "../components/Header";
import Menu from "../components/Menu";

const Pagelayout = () => {
    return (
        <div className="h-screen bg-azul-total/10 overflow-auto flex">
            <Menu />
            <div className="flex-1">
                <Header />
                <div className="p-10">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default Pagelayout;