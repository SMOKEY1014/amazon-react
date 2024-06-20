import React, {useContext} from 'react'
import ShoppingContext from './context/shopping/shoppingContext'
import './CheckoutProduct.css'

const CheckoutProducts = ({ id, image, title, rating, price, hideButton }) => {
    const shoppingContext = useContext(ShoppingContext)
    const {removeFromBasket} = shoppingContext;
    const removeFromBasketHandler = () => {
        removeFromBasket({ id: id });
    }

  return (
      <div className='checkout_product'>
          <img src={image} alt={title} className='checkout_product_image'/>
          <div className='checkout_product_info'>
              <p className='checkout_product'>{title}</p>
              <div className='checkout_product_rating'>
          <p>{rating}</p>
          <p>{Array(rating).fill().map((_, i) => (<p key={id}>⭐</p>)) }</p>
              </div>
            <p className='checkout_product_price'><small>$</small><strong>{price}</strong></p>
            {!hideButton && <button onClick={removeFromBasketHandler}>Remove From Basket</button>}

          </div>
          
    </div>
  )
}

export default CheckoutProducts