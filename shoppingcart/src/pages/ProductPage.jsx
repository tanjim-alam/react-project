import "../style/productPage.css"
import { useLocation } from "react-router-dom"

function ProductPage() {
    const location = useLocation();
    const { name, image, image1, image2, image3, price, id } = location.state
    return (
        <div id="productPage">
            <div id="productContainer">
                <div id="leftBox">
                    <div id="smallImageBox">
                        <div>
                            <img src={image1} alt="" />
                        </div>
                        <div>
                            <img src={image2} alt="" />
                        </div>
                        <div>
                            <img src={image3} alt="" />
                        </div>
                    </div>
                    <div id="bigImageBox">
                        <img src={image} alt="" />
                    </div>
                </div>
                <div id="rightBox">
                    <h3>{name}</h3>
                    <p>{price}</p>
                </div>
            </div>
        </div>
    )
}

export default ProductPage;