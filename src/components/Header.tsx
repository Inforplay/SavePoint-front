import { Link } from "react-router";

const Header = () => {
    return (
        <header className="p-4 bg-white flex justify-end">
            <div className="flex gap-4 items-center">
                <div className="text-right">
                    <h1>Anderson Moreira</h1>
                    <Link to="/" className="font-bold text-sm text-azul-total!">Sair</Link>
                </div>
                <div className="w-10 h-10 flex justify-center items-center bg-azul-total text-white font-bold rounded-full">AM</div>
            </div>
        </header>
    );
}
 
export default Header;