import { LOGO_IMG } from "../uitis/contents";
import { Link } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../uitis/UserContext";

import { useState } from "react";

const Header = () => {
  const [isLogin, setIsLogin] = useState("Login");

  const {loggedInUser} = useContext(UserContext);

  return (
    <div className="flex shadow-md justify-between p-4 items-center">
      <div className="w-24">
        <img alt="Logo" src={LOGO_IMG} />
      </div>
      <div>
        <ul  className="flex">
          <li className="px-4 py-2 hover:bg-slate-50 cursor-pointer hover:shadow-md w-32 text-center">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4 py-2 hover:bg-slate-50 cursor-pointer hover:shadow-md w-32 text-center">
            <Link to="/about">About</Link>
          </li>
          <li className="px-4 py-2 hover:bg-slate-50 cursor-pointer hover:shadow-md w-32 text-center">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-4 py-2 hover:bg-slate-50 cursor-pointer hover:shadow-md w-32 text-center">
            <Link to="/grocery">Grocery</Link>
          </li>
          <button
             className="px-4 py-2 hover:bg-slate-50 cursor-pointer hover:shadow-md w-32 text-center"
            onClick={() =>
              isLogin == "Login" ? setIsLogin("Logout") : setIsLogin("Login")
            }
          >
            {isLogin}
          </button>

          <li>{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
