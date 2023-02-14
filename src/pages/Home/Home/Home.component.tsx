import { useFileContexthooks } from "../../../context/Products/GetFilteredProducts";
import Footer from "../../Shared/Footer.component";
import Navigation from "../../Shared/Navigation.component";
import Banner from "../Banner/Banner.component";
import BestShop from "../BestShop/BestShop.component";
import BrandCategories from "../BrandCategories/BrandCategories.component";
import Category from "../Category/Category.component";
import Choose from "../Choose/Choose.component";
import CreateShop from "../CreateShop/CreateShop.component";
import FlashSales from "../FlashSales/FlashSales.component";
import PaymentMethods from "../PaymentMethod/PaymentMethods.component";
import TodayProducts from "../TodayProducts/TodayProducts.component";

const Home = () => {
  const { products } = useFileContexthooks();

  return (
    <div>
      <Navigation></Navigation>
      <Banner></Banner>
      {/* <BillsUtility></BillsUtility> */}
      <Category></Category>
      <FlashSales></FlashSales>
      <Choose></Choose>
      <TodayProducts></TodayProducts>
      <BestShop></BestShop>
      <CreateShop></CreateShop>
      <BrandCategories></BrandCategories>
      <PaymentMethods></PaymentMethods>
      <Footer></Footer>
    </div>
  );
};

export default Home;
