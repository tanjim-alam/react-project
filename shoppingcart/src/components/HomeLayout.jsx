import { useContext } from "react"
import "../style/homeLayout.css"
import MyContext from "../context/ShoppingContext"
import { NavLink } from "react-router-dom";
function HomeLayout({ children }) {
    const { cartLength } = useContext(MyContext);
    return (
        <div>
            <div id="navHome">
                <div id="box1">
                    <div id="logoBox">
                        <h3 id="logo">Logo</h3>
                    </div>
                    <div id="searchBox">
                        <input id="search" type="text" placeholder="Seatch..." />
                        <button id="searchBtn">Search</button>
                    </div>

                    <div id="userMainBox">
                        <div id="cartBox">
                            {cartLength < 1 ?
                                (
                                    alert("Your cart is empty")
                                ) : (<NavLink to="/checkout">
                                    <p id="cart">Cart: <span>{cartLength}</span></p>
                                </NavLink>
                                )

                            }
                        </div>
                        <div id="userBox">
                            <button>Login</button>
                            <button>Register</button>
                        </div>
                    </div>
                </div>
                <div id="box2">
                    <nav id="navbar">
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Groceries</a></li>
                            <li><a href="#">Premium Fruits</a></li>
                            <li><a href="#">Home & Kitchen</a></li>
                            <li><a href="#">Fashion</a></li>
                            <li><a href="#">Beauty</a></li>
                            <li><a href="#">Jewellery</a></li>
                            <li><a href="#">Home Improvement</a></li>
                            <li><a href="#">Sports, Toys & Luggage</a></li>

                        </ul>
                    </nav>
                </div>

            </div>
            {children}
        </div>
    )
}

export default HomeLayout