import { useState } from 'react'
import './App.css'
import Header from './components/header/Header'
import friends from './friends.json'
import Footer from './components/footer/Footer'
import logoBG from './assets/images/logoBG.png'
import ContactUs from './pages/contactUs/ContactUs'
import Home from './pages/homepage/Home'
import About from './pages/about/About'
import {BrowserRouter, Routes, Route, Link, NavLink} from 'react-router-dom'
import Friends from './pages/friends/Friends'
import Servises from './pages/services/Servises'
import ProductsPage from './pages/products/ProductsPage'

function App() {
   return (
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/friends" element={<Friends />} />
          <Route path="/servises" element={<Servises />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/products" element={<ProductsPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    
  )
}

export default App
