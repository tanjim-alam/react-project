import Item from "./Item"
import "../style/itemList.css"
import { useContext } from "react"
import MyContext from "../context/ShoppingContext"

function ItemList() {
    const { data, setData, cartData, setCartData, onAddToCart } = useContext(MyContext);


    return (
        <div id="itemListBox">
            {data?.map((e, i) => <Item key={i} image={e.image} image1={e.image1} image2={e.image2} image3={e.image3} name={e.name} price={e.price} id={e.id} onAddToCart={() => onAddToCart(e)} />)}
        </div>
    )
}

export default ItemList