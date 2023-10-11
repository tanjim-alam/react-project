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
        },
        {
            id: 4,
            name: 'Amul Pure Ghee 1 L (Tin)',
            price: 615.00,
            image:
                'https://www.jiomart.com/images/product/original/490001521/amul-pure-ghee-1-l-tin-product-images-o490001521-p490001521-0-202206061807.jpg?im=Resize=(420,420)'
        },
        {
            id: 5,
            name: 'Classela Boom Office Chair',
            price: 2499.00,
            image:
                'https://www.jiomart.com//images/product/original/494241444/classela-boom-office-chair-black-fiber-body-with-wheel-metal-base-product-images-o494241444-p605436239-0-202310041411.jpg?im=Resize=(150,150)'
        },
        {
            id: 6,
            name: 'boAt Wave Play Smart Watch',
            price: 899.00,
            image:
                'https://www.jiomart.com/images/product/original/493178418/boat-wave-play-smart-watch-with-4-29-cm-1-69-inch-hd-amoled-display-active-black-digital-o493178418-p594971550-0-202211021846.jpeg?im=Resize=(420,420)'
        },
        {
            id: 7,
            name: 'pTron Pulsefit Ethos',
            price: 999.00,
            image:
                'https://www.jiomart.com/images/product/original/rvjj7dgxhx/ptron-pulsefit-ethos-1-85-inch-touch-display-bluetooth-calling-smartwatch-functional-crown-black-product-images-orvjj7dgxhx-p605388526-0-202310021619.jpg?im=Resize=(420,420)'
        },
        {
            id: 8,
            name: 'boAt Airdopes 100',
            price: 999.00,
            image:
                'https://www.jiomart.com/images/product/original/493911526/boat-airdopes-100-total-playtime-50h-beast-mode-ipx4-water-and-sweat-shield-quad-mics-with-enx-technology-opal-black-digital-o493911526-p603517150-0-202308022011.jpeg?im=Resize=(420,420)'
        },
        {
            id: 9,
            name: 'Mens Full T Shirt',
            price: 199.00,
            image:
                'https://www.jiomart.com/images/product/original/rv3zngnfyp/eyebogler-mens-round-neck-regular-fit-full-length-sleeve-t-shirt-product-images-rv3zngnfyp-0-202302021811.jpg?im=Resize=(600,750)'
        },
        {
            id: 10,
            name: 'HOTSTYLE Black Casual Shoe',
            price: 199.00,
            image:
                'https://www.jiomart.com/images/product/original/rvuo5gml4x/hotstyle-fashion-black-casual-shoe-for-menss-product-images-rvuo5gml4x-0-202202262008.jpg?im=Resize=(600,750)',
            image1: "https://www.jiomart.com/images/product/original/rvuo5gml4x/hotstyle-fashion-black-casual-shoe-for-menss-product-images-rvuo5gml4x-1-202202262008.jpg?im=Resize=(600,750)",
            image2: "https://www.jiomart.com/images/product/original/rvuo5gml4x/hotstyle-fashion-black-casual-shoe-for-menss-product-images-rvuo5gml4x-2-202202262008.jpg?im=Resize=(600,750)",
            image3: "https://www.jiomart.com/images/product/original/rvuo5gml4x/hotstyle-fashion-black-casual-shoe-for-menss-product-images-rvuo5gml4x-3-202202262009.jpg?im=Resize=(600,750)"
        }
    ]);

    const [cartData, setCartData] = useState([]);
    let cartLength = cartData.length;

    function onAddToCart(cartItemData) {

        const alreadyCartItem = cartData.find((item) => {
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

    const totalAmount = () => {
        return cartData.reduce((total, item) => total + item.product.price * item.quantity, 0);
    }


    return (
        <MyContext.Provider value={{ data, setData, cartData, setCartData, cartLength, onAddToCart, totalAmount }}>
            {children}
        </MyContext.Provider>
    )
}

export default MyContext