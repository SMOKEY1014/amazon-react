import React from 'react'
import { Link } from 'react-router-dom'
import "./Products.css"
import Product from './Product'

const Products = () => {
  return (
    <>
      <div className='products_row'>
        <Product
          id='1'
          title='the title of the product'
          image='https://m.media-amazon.com/images/I/61lJ3xlQX2L._SX3000_.jpg'
          rating={4}
          price={98.57} />
        <Product
          id='2'
          title='the title of the product2'
          image='https://m.media-amazon.com/images/I/61lJ3xlQX2L._SX3000_.jpg'
          rating={4}
          price={990} />
        <Product
          id='3'
          title='the title of the product2'
          image='https://m.media-amazon.com/images/I/61lJ3xlQX2L._SX3000_.jpg'
          rating={4}
          price={990} />
        
      </div>
      <div className='products_row'>
      <Product
        id='4'
        title='the title of the product'
        image='https://m.media-amazon.com/images/I/61lJ3xlQX2L._SX3000_.jpg'
        rating={4}
          price={990} />
      <Product
        id='5'
        title='the title of the product2'
        image='https://m.media-amazon.com/images/I/61lJ3xlQX2L._SX3000_.jpg'
        rating={4}
          price={990} />
      
      </div>
      <div className='products_row'>
      <Product
        id='6'
        title='the title of the product'
        image='https://m.media-amazon.com/images/I/61lJ3xlQX2L._SX3000_.jpg'
        rating={4}
          price={990} />
      <Product
        id='7'
        title='the title of the product2'
        image='https://m.media-amazon.com/images/I/61lJ3xlQX2L._SX3000_.jpg'
        rating={4}
          price={990} />
      
    </div>
    </>
    )
}

export default Products