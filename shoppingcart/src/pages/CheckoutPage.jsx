import { useContext } from "react"
import MyContext from "../context/ShoppingContext"
import AddedItemCard from "../components/AddedItemCard"
import "../style/checkoutPage.css"
import HomeLayout from "../components/HomeLayout"
import ProductSlider from "../components/ProductSlider"

function CheckoutPage() {
    const { cartData, cartLength, totalAmount, setCartData } = useContext(MyContext)

    function onDeleteItem(idx) {
        const newData = cartData.filter((item) => {
            return item.product.id !== idx
        })
        setCartData(newData)
    }
    console.log(totalAmount);
    return (
        <HomeLayout>
            <div id="mainBox">
                <div id="container">
                    <div id="productBox">
                        {cartData?.map((e, i) => <AddedItemCard
                            key={i}
                            name={e.product.name}
                            price={e.product.price}
                            image={e.product.image}
                            id={e.product.id}
                            quantity={e.quantity}
                            onAddQty={() => {
                                setCartData((prevCartData) => {
                                    const updatedCart = prevCartData.map(
                                        (prevItem) => prevItem.product.id === e.product.id
                                            ? {
                                                ...prevItem, quantity:
                                                    e.quantity + 1
                                            } : prevItem
                                    );
                                    return updatedCart
                                })
                            }}
                            onSubQty={() => {
                                setCartData((prevCartData) => {
                                    const updatedCart = prevCartData.map(
                                        (prevItem) => prevItem.product.id === e.product.id
                                            ? {
                                                ...prevItem, quantity: Math.max(e.quantity - 1, 1)
                                            } : prevItem
                                    )
                                    return updatedCart
                                })
                            }}
                            onDeleteItem={onDeleteItem}
                        />)}
                    </div>
                    <div id="billingBox">
                        <h3>Payment Details</h3>
                        <div>
                            <p>MRP Total</p>
                            <span>₹{totalAmount()}</span>
                        </div>
                        <hr />
                        <div>
                            <p>Product Discount</p>
                            <span className="additional">- ₹150.00</span>
                        </div>
                        <hr />
                        <div>
                            <p>Delivery Fee</p>
                            <span className="additional">Free</span>
                        </div>
                        <hr />
                        <div>
                            <p>Total</p>
                            <span>₹{totalAmount()}</span>
                        </div>
                        <button>Place Order</button>
                    </div>
                </div>
                <ProductSlider />
            </div>
        </HomeLayout>
    )
}

export default CheckoutPage;