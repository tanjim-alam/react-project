import HomeLayout from "../components/HomeLayout";
import ItemList from "../components/ItemList";
import Slider from "../components/Slider";

function HomePage({ data, setCartData }) {
    return (
        <HomeLayout>
            <Slider />
            <ItemList data={data} setCartData={setCartData} />
        </HomeLayout>
    )
}

export default HomePage