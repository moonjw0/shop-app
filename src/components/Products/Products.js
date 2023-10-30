import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../store/productsSlice';
import './Products.css'
import Product from './Product';

export default function Products() {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.products);

  console.log('products', products);
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  
  return (
    <div className='products'>
      <div className='products__container'>
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}
