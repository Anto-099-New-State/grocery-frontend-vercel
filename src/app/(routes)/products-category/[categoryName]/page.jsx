import GLobalapi from '@/app/_utils/GLobalapi'
import React from 'react'
import TopCategoryList from './_components/TopCategoryList';
import ProductList from '@/app/_component/ProductList';

async function ProductName({params}) {
  const categoryList = await GLobalapi.getCatgeoryList();
  const productList = await GLobalapi.getAllProductsbyCategory(params.categoryName);
  return (
    <div>
      <h2 className='p-4 bg-green-700 text-white font-extrabold text-3xl text-center'>{params.categoryName}</h2>
      <TopCategoryList categoryList={categoryList} selectedCatgory={params.categoryName}/>
      <div className='p-5 md:p-10'>
        <ProductList productList={productList}/>
      </div>
      </div>

  )
}

export default ProductName