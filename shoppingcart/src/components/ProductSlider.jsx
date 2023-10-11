import "../style/productSlider.css"
import { useContext } from "react";
import Item from "./Item";
import MyContext from "../context/ShoppingContext";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

function ProductSlider() {
    const { data, onAddToCart } = useContext(MyContext)
    const rightBtn = document.getElementById("arrow_right");
    const leftBtn = document.getElementById("arrow_left");
    const Cards = document.getElementById('productContainer');

    function onRightScrollBtn() {
        Cards.scrollLeft += 400
        console.log("yes")
    }

    function onLeftScrollBtn() {
        Cards.scrollLeft -= 400
        setInterval(() => {
            onLeftScrollBtn()
        }, 3000)
        console.log("yes")
    }
    return (
        <div id="productSlideMain">
            <i class='fa fa-angle-right arrowBtn' id="arrow_right" onClick={onRightScrollBtn}></i>
            <i class='fa fa-angle-left arrowBtn' id="arrow_left" onClick={onLeftScrollBtn}></i>
            <div id="productContainer">
                {data.map((e, i) => {
                    return (
                        <div id="productCart" key={i}>
                            <img src={e.image} alt="" />
                            <h3>{e.name}</h3>
                            <p>{e.price}</p>
                            <button onClick={() => onAddToCart(e)}>Add To Cart</button>

                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ProductSlider