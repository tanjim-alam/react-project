import { useContext } from "react"
import "../style/item.css"
import MyContext from "../context/ShoppingContext"
import { useNavigate } from "react-router-dom";
function Item({ name, image, image1, image2, image3, price, id, onAddToCart }) {
    const navigate = useNavigate()
    const { data, setData } = useContext(MyContext);
    return (
        <div id="itemBox" onClick={() => navigate(`/product/${id}`, { state: { name, image, image1, image2, image3, price, id } })}>
            <img src={image} alt="" />
            <h3>{name}</h3>
            <p>Price: {price}</p>
            <button onClick={onAddToCart}>Add To Cart</button>
        </div>
    )
}

export default Item