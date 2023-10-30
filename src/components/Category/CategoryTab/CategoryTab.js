import React from 'react'
import './CategoryTab.css'

export default function CategoryTab({category, selectedCategory, setSelectedCategory}) {
  console.log(selectedCategory);
  const handleCategory = (category) => {
    setSelectedCategory(category);
  }

  return (
    <button className={`category ${selectedCategory === category ? 'selected' : ''}`} onClick={handleCategory(category)}>
      {category}
    </button>
  )
}
