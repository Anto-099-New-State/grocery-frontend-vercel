import CategoryList from "./_component/CategoryList";
import Header from "./_component/Header";
import Slider from "./_component/Slider";
import GLobalapi from "./_utils/GLobalapi";
export default async function Home() {
   const sliderList = await GLobalapi.getSlider();
   const categoryList = await GLobalapi.getCatgeoryList();
  return (

    <div>
     <Header/>
     <Slider sliderList={sliderList}/>
     <CategoryList categoryList={categoryList}/>
    </div>
  );
}
