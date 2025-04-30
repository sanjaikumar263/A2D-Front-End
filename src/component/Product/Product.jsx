import React from 'react'
import "./Product.css"
import { asssts } from '../../assets/assets'
const Product = () => {
  return (
    <div className='product' id='product'>
      <br />
      <br />
      <center>
      <h1> Top Product</h1>
      </center>
      <div className="product_item">
          <div className="product_left">
        <img src={asssts.pc1} alt="" className='temp' />
      </div>
      <div className="product_right">
        <p className='tital'>This Our is One  of the best product for our client</p> 
        <ul>
          <li>Intel core i9</li>
          <li>RTX 4060 GB</li>
          <li>RSUS B550-F GAMING WIFI II</li>
          <li>SAMSUNG 970 EVO PLUS 500GB NWE</li>
        </ul>
      </div>
      </div>
      <div className="product01">
        <div className="product1_left">
          <ul>
          <li>INTEL CORE i714700K 20 CORE 28 THREA</li>
          <li>GIGABYTE Z790 AORUS ELITE AX ICE WHITE</li>
          <li>CORSAIR VENGEANCE 16x2 32GB 5200MHZ</li>
          <li>WD BLUE SN580 ITB NVME GEN4 SSD</li>
          <li>SEAGATE 2TB SKYHAWK SATA 6 Gb/s</li>
          <li>GIGABYTE RTX 4060Tl 8GB GDDR6</li>
          <li>DEEPCOOL PM750D GOLD CERTIFIED PSU</li>
          <li>GIGABYTE C301 GLASS 4X ARGB FANS WHITE</li>
          <li>COOLERMASTER ML360L 360MM AIO WHITE</li>
          </ul>
        </div>
        <div>
          <img src={asssts.pc2} alt="" className='temp1'/>
        </div>
      </div>
    
    </div>
  )
}

export default Product
