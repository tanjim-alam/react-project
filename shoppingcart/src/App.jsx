import { useState } from "react";
import ItemList from "./components/ItemList";
import './App.css';
import HomeLayout from "./components/HomeLayout";
import Slider from "./components/Slider";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CheckoutPage from "./pages/CheckoutPage";

function App() {
  // const [data, setData] = useState([
  //   {
  //     id: 1,
  //     name: 'GFG T-shirt',
  //     price: 499,
  //     image:
  //       'https://media.geeksforgeeks.org/wp-content/uploads/20230823165506/gfg1.png'
  //   },
  //   {
  //     id: 2,
  //     name: 'GFG Bag',
  //     price: 699,
  //     image:
  //       'https://media.geeksforgeeks.org/wp-content/uploads/20230823165553/gfg2.jpg'
  //   },
  //   {
  //     id: 3,
  //     name: 'GFG Hoodie',
  //     price: 799,
  //     image:
  //       'https://media.geeksforgeeks.org/wp-content/uploads/20230823165623/gfg3.jpg'
  //   }
  // ]);

  // const [cartData, setCartData] = useState([]);

  // console.log(cartData)
  // function onAddToCart(idx) {
  //   const cartItem = data.find((item, i) => {
  //     return item.id = idx
  //   })
  //   setCartData(cartItem)
  // }
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
    </Routes>
  )
}

export default App

{/* <div>
      <HomeLayout />
      <Slider />
      <ItemList data={data} />
    </div> */}