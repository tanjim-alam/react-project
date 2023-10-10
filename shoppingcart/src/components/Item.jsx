import { useContext } from "react"
import "../style/item.css"
import MyContext from "../context/ShoppingContext"
function Item({ name, image, price, id, onAddToCart }) {
    const { data, setData } = useContext(MyContext);
    return (
        <div id="itemBox">
            <img src={image} alt="" />
            <h3>{name}</h3>
            <p>Price: {price}</p>
            <button onClick={onAddToCart}>Add To Cart</button>
        </div>
    )
}

export default Item