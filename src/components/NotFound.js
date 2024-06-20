import React from 'react'
import './NotFound.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const NotFound = () => {
  return (
      <div className='not_found'>
          <Link to='/'>
              <div>
              <img className='img_top' scr="https://m.media-amazon.com/images/I/61lJ3xlQX2L._SX3000_.jpg" alt="not found 404"/>
          </div>
          <div>
              <img scr="https://m.media-amazon.com/images/I/61lJ3xlQX2L._SX3000_.jpg" alt="not found 404"/>
          </div>
          <div>
              <img scr="https://m.media-amazon.com/images/I/61lJ3xlQX2L._SX3000_.jpg" alt="not found 404"/>
          </div>
          </Link>
      </div>
  )
}

export default NotFound