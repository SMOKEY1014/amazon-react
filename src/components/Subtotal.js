import React, { useContext } from 'react'
import CurrencyFormat from 'react-currency-format'
import './Subtotal.css'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import ShoppingContext from './context/shopping/shoppingContext'

const Subtotal = () => {
  const history = useHistory();
  const shoppingContext = useContext(ShoppingContext);
  const { getBasketTotal, basket } = shoppingContext;
  


  return (
      <div className='subtotal'>
          <CurrencyFormat 
          renderText={(value) => (
              <>
                <p>Subtotal ({basket?.legth} item):<strong>{value}</strong></p>
              <small className='subtotal_gift'>
                  <input type="checkbox" /> This payment includes a gift
              </small>
              </>
          )}
          decimalScale={2}
          value={getBasketTotal(basket)}
          displayType={'text'}
          prefix={'$'}
      />
          <button onClick={event => history.push('/payment')}>Proceed to Checkuut</button>
    </div>
  )
}

export default Subtotal