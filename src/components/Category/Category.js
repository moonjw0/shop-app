import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCategories } from '../../store/categoriesSlice';
import './Category.css'
import CategoryTab from './CategoryTab/CategoryTab';

export default function Category() {
  const dispatch = useDispatch();
  const categories = useSelector(state => state.categories.categories);
  const [selectedCategory, setSelectedCategory] = useState('All');

  // console.log('categories', categories);
  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  return (
    <div className='categories'>
      <div className='categories__container'>
        <div className='categories__title'>Products</div>
        <div className='categories__content'>
          {categories.map((category) => (
            <CategoryTab category={category} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
          ))}
        </div>
      </div>
    </div>
  )
}
