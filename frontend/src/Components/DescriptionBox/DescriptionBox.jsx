import React from 'react'
import './DescriptionBox.css'
const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="discriptionbox-navigator">
            <div className="discriptionbox-nav-box">Description</div>
            <div className="discriptionbox-nav-box fade">Reviews (122)</div>
        </div>
        <div className="discriptionbox-discription">
            <p>An e-commerce website is an online platform that facilitate buying and selling of products or services over the internet serves as a virtual marketplace where businesses and individual showcase their products, interact with customers, and conduct transactions without the need for a physical presence. E-commerce websites have gained immense popularity due to their conveniance accessibility, and the global reach they offer.</p>
            <p>E-commerce websites typically display products or services along with detailed descriptions, images, prices, and any available variations (eg, sizes, colors). Each product usually has its own dedicated page with relevant information</p> 
        </div>
    </div>
  )
}

export default DescriptionBox