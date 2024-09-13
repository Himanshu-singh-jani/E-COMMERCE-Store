import React from 'react'
import saleposter from '../../IMAGES/saleimage.png'

const Hero = () => {
  return (
    <section class="text-gray-600 body-font mt-10 bg-blue-200">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">DIWALI SALE
        <br class="hidden lg:inline-block"/>FLAT 30% OFF
      </h1>
      <p class="mb-8 leading-relaxed">Take advantage of our incredible 30% off sale! For a limited time, you can enjoy huge savings on our entire collection. Whether you're looking to upgrade your wardrobe, tech gadgets, or home essentials, now is the perfect time to shop. With high-quality products at unbeatable prices, this sale offers you the opportunity to get more for less. Don't miss out—stock up on your favorites before they're gone, and save big while supplies last!</p>

    </div>
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img class="object-cover object-center rounded" alt="saleposter" src={saleposter}/>
    </div>
  </div>
</section>
  )
}

export default Hero;