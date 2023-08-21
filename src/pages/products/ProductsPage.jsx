import React, { useEffect, useState } from 'react'
import './ProductsPage.scss'
import axios from 'axios'
import CurrentProduct from './CurrentProduct'
import data from '../../data.json'
export default function ProductsPage() {
  const firstProduct = data.filter((item) => item.type === 'bandage')
  const [products, setProducts] = useState(firstProduct)
  const [activeClass, setActiveClass] = useState('bandage')
  const changeContext = (e) => {
    const filteredProducts = data.filter((item) => item.type === e)
    setProducts(filteredProducts)
    setActiveClass(e)


  } 
     useEffect(() => {
      axios.get('api/products/')
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }, []);
  // useEffect(() => {
  //   fetch("api/products/").then(res => {
  //     if(res.ok){
  //       console.log('ok')
  //       console.log(res)
  //     }
  //   }).then(res => {
  //     console.log(res);
  //   })
  // })

  return (
    <div className='productsPage'>
      <nav >
          <a className={`${activeClass === 'bandage'}`} onClick={() => changeContext('bandage')}>Բինտեր</a>
          <a className={`${activeClass === 'tanziffs'}`} onClick={() => changeContext('tanziffs')}>Թանզիֆեր</a>
          <a className={`${activeClass === 'napkins'}`} onClick={() => changeContext('napkins')}>Անձեռոցիկներ</a>
          <a className={`${activeClass === 'tops'}`} onClick={() => changeContext('tops')}>Թոփեր</a>

       </nav>
       <div className='products'>
          <CurrentProduct showedProduct = {products}/>
      </div>
    </div>
  )
}
