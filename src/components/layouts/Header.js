import React from 'react'
import { useContext } from 'react';
import { Link } from 'react-router-dom'
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import './Header.css';
import ShoppingContext from '../context/shopping/shoppingContext'
import {auth} from "../../firebase"

const Header = () => {
  const shoppingContext = useContext(ShoppingContext);
  const { basket, user } = shoppingContext;
  const handleAuthencation = () => {

    if (user) {
      auth.signOut()
    }
  }


  return (
    <header className='header'>
      <Link to="/">
        <img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="Amazon Logo" />
      </Link>

      <div className="header_search">
        <input className='header_input' type='text' />
        <SearchIcon className="search_icon" />
      </div>
      <div className="header_nav">
        
        <Link to={!user && '/login'}>
          <div className='header_option' onClick={handleAuthencation}>
            <span className='header_optionOne'>Hello {!user ? 'Guest' : user.email}</span>
            <span className='header_optionTwo'>{user ? 'Sighn Out' : 'Sign in'}</span>
          </div>
        </Link>
        
        <div className='header_option'>
          <span className='header_optionOne'>Returns</span>
          <span className='header_optionTwo'>& Orders</span>
        </div>
        <div className='header_option'>
          <span className='header_optionOne'>Your</span>
          <span className='header_optionTwo'>Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header_optionsBasket">
            <ShoppingBasketIcon />
            <span className='header_optionTwo header_basketCount'>{ basket.length }</span>
            </div>
        </Link>
      </div>
    </header>
  )
}
    
Header.propTypes = {}

export default Header