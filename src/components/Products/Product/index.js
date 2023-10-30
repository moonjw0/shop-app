import React from 'react'
import './Product.css'

export default function Product({ id, product }) {
  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n-1) + "..." : str;
  };

  return (
    <div className='product'>
      <div className='product__container'>
        <img className='product__img' src={product.image} alt={product.title} />
        <div className='product__title'>{truncate(product.title, 16)}</div>
        <div className='product__info'>
          <button className='cart'>장바구니에 담기</button>
          <div className='product__price'>$ {product.price}</div>
        </div>
      </div>
    </div>
  )
}
