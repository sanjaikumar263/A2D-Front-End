import React from 'react'
import Nav from './component/Nav/Nav'
import Hero from './component/Hero/Hero'
import KeyPointes from './component/KeyPointes/KeyPointes'
import HowItWork from './component/HowItWork/HowItWork'
import Product from './component/Product/Product'
import Form from './component/Form/Form'
import { ToastContainer } from 'react-toastify'


const App = () => {
  return (
    <div>
      <Nav/>
      <Hero/>
      <KeyPointes/>
      <HowItWork/>
      <Product/>
      <Form/>
      <ToastContainer/>
    </div>
  )
}

export default App
 