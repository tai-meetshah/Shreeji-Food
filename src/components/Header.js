import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import logoImage from "../../src/Images/shreeji.jpg";
import { useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";

const Title = () => (
  <a href="/">
    <img
      className="logo"
      src={logoImage}
      alt="Shreeji Food Logo"
      title="Shreeji Food Logo"
    />
  </a>
);

const Header = function () {
  const [btnNameReact, setBtnNameReact] = useState("Login");

  const isOnline = useOnlineStatus();

  // * Subscribing to the store using a Selector
  const cartItems = useSelector((store) => store.cart.items);
  console.log("cartItems: ", cartItems);

  return (
    <div className="header">
      <Title />

      <div className="nav-items">
        <ul>
          <li>Online Status: {isOnline ? "✅" : "⛔"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/cart" className="cart-link">
              <FaShoppingCart className="cart-icon" />
              <span className="cart-count">{cartItems.length}</span>
            </Link>
          </li>
          <li>
            <button
              className="login-btn"
              onClick={() => {
                //   btnName = 'Logout';
                btnNameReact === "Login"
                  ? setBtnNameReact("Logout")
                  : setBtnNameReact("Login");
                console.log(btnNameReact);
              }}
            >
              {btnNameReact}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
