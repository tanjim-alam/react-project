import Item from "./Item"
import "../style/itemList.css"
import { useContext } from "react"
import MyContext from "../context/ShoppingContext"

function ItemList() {
    const { data, setData, cartData, setCartData } = useContext(MyContext);
    function onAddToCart(cartItemData) {
        // const cartItem = data.find((item) => {
        //     return item.id == cartItemData
        // })
        // setCartData([...cartData, { product: cartItem }])
        // console.log(cartItemData.id);

        const alreadyCartItem = cartData.find((item) => {
            // console.log(item.product.id)
            return item.product.id === cartItemData.id
        });

        if (alreadyCartItem) {
            const latestCartUpdate = cartData?.map((item) => item.product.id === cartItemData.id ? {
                ...item, quantity: item.quantity + 1
            } : item
            );
            setCartData(latestCartUpdate);
        }
        else {
            setCartData([...cartData, { product: cartItemData, quantity: 1 }])
        }
    }
    return (
        <div id="itemListBox">
            {data?.map((e, i) => <Item key={i} image={e.image} name={e.name} price={e.price} id={e.id} onAddToCart={() => onAddToCart(e)} />)}
        </div>
    )
}

export default ItemList