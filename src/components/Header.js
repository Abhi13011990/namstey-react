import { LOGO_IMG } from "../uitis/contents";

const Header = () => {
    return(
        <div className="header">
            <div className="logo">
                <img className="logoImg" src={LOGO_IMG} />
            </div>
            <div className="nav">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    ) 
}

export default Header;