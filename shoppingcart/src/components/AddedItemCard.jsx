import { useContext } from "react"
import "../style/addedItemCard.css"
import MyContext from "../context/ShoppingContext"
function AddedItemCard({ name, price, image, id, quantity, onAddQty, onSubQty, onDeleteItem }) {
    const { setCartData } = useContext(MyContext);
    return (
        <div id="cardBox">
            <div id="cartDetailsfoBox">
                <img src={image} alt="" />
                <div>
                    <h3>{name}</h3>
                    <p>Price : {price}</p>
                </div>
            </div>
            <div id="qty">
                <div>
                    <p>Quantity: {quantity}</p>
                </div>
                <div id="qtyBtnBox">
                    <button onClick={onSubQty}>-</button>
                    <span>{quantity}</span>
                    <button
                        onClick={onAddQty}
                    >
                        +
                    </button>
                </div>
                <div id="removeBtnBox">
                    <button onClick={() => onDeleteItem(id)}>Remove</button>
                </div>
            </div>
        </div>
    )
}

export default AddedItemCard