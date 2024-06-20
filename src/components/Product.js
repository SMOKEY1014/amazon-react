import React, { useContext } from 'react'
import "./Product.css"
import ShoppingContext from './context/shopping/shoppingContext'


const Product = ({ id, image, title, rating, price }) => {
  const addToBasketHandler = () => {
    const shoppingContext = useContext(ShoppingContext);
    const { addToBasket } = shoppingContext;
    
    const addToBasketHandler = () => {
      addToBasket({ item: { id, title, image, price } })
    }
  }
  return (
      <div className='product' key={id}>
          <img src={image} alt={title} />
          <div className='product_info'>
              <p>{title}</p>
              <div className='product_rating'>
          <p>{rating}</p>
          <p>{Array(rating).fill().map((_, i) => (<p key={id}>⭐</p>)) }</p>
              </div>
              <p className='product_price'>{price}</p>
          </div>
          <button className='product_button' onClick={addToBasketHandler}>Add to basket</button>
    </div>
  )
}

export default Product