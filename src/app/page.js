import CategoryList from "./_component/CategoryList";
import Footer from "./_component/Footer";
import Header from "./_component/Header";
import ProductList from "./_component/ProductList";
import Slider from "./_component/Slider";
import GLobalapi from "./_utils/GLobalapi";
import Image from "next/image";
export default async function Home() {
   const sliderList = await GLobalapi.getSlider();
   const categoryList = await GLobalapi.getCatgeoryList();
   const productList = await GLobalapi.getAllProducts();
   return (

    <div>
     <Slider sliderList={sliderList}/>
     <CategoryList categoryList={categoryList}/>
     <ProductList productList={productList} />
     <img src="https://www.shutterstock.com/image-vector/organic-grocery-shopping-web-banner-design-1858683100"
     width={1000}
     height={400}
     alt="banner"
     className="w-full h-[400px] object-contain"
     />
     <Footer/>
     
    </div>
  );
}
