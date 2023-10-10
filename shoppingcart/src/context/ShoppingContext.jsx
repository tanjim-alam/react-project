import { createContext, useState } from "react";
const MyContext = createContext();

export const MyContextProvider = ({ children }) => {
    const [data, setData] = useState([
        {
            id: 1,
            name: 'GFG T-shirt',
            price: 499,
            image:
                'https://media.geeksforgeeks.org/wp-content/uploads/20230823165506/gfg1.png'
        },
        {
            id: 2,
            name: 'GFG Bag',
            price: 699,
            image:
                'https://media.geeksforgeeks.org/wp-content/uploads/20230823165553/gfg2.jpg'
        },
        {
            id: 3,
            name: 'GFG Hoodie',
            price: 799,
            image:
                'https://media.geeksforgeeks.org/wp-content/uploads/20230823165623/gfg3.jpg'
        }
    ]);

    const [cartData, setCartData] = useState([]);
    let cartLength = cartData.length;

    const totalAmount = () => {
        return cartData.reduce((total, item) => total + item.product.price * item.quantity, 0);
    }


    return (
        <MyContext.Provider value={{ data, setData, cartData, setCartData, cartLength, totalAmount }}>
            {children}
        </MyContext.Provider>
    )
}

export default MyContext