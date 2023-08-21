import React, { useState, useEffect } from 'react'
import data from '../../data.json'
import './ProductHomepage.scss'
import product from '../../assets/images/product.png'
import Product from '../products/CurrentProduct'
import axios from 'axios';

export default function Products() {
    let productLength = data.length > 6 ? 6 : data.length
    const [products, setProducts] = useState(data.slice(0, productLength))
    const [isShow, setIsShow] =  useState(true)
    const showAllProducts = () => {
        setProducts(data)
        setIsShow(false )
    }
    // useEffect(() => {
      // Make a GET request to your API endpoint
    //   axios.get('http://127.0.0.1:8000/api/data')
    //     .then(response => {
    //       console.log(response);
    //     })
    //     .catch(error => {
    //       console.error('Error fetching data:', error);
    //     });
    // }, []);
  
  return (
    <section className='product'>
        <h3>ԱՐՏԱԴՐԱՆՔ</h3>
        <ul className='product__list' key={Math.random()}>
            <Product showedProduct={products}/>
        </ul>
        {isShow && <button onClick={showAllProducts} ><p className='btn_text'>ՏԵՍՆԵԼ ԱՄԲՈՂՋԸ</p></button>}
    </section>
  )
}
