import React from 'react'
import "../globals.css"

const Carousel = () => {
  return (
    <div className="carousel carousel-end rounded-box flex overflow-hidden gap-[25px]">
  <div className="carousel-item">
  <div className="card bg-white w-96 shadow-xl">
  <figure>
    <img
      src="/carousel1-img1.png"
      alt="Shoes" />
  </figure>
  <div className="card-body text-black">
    <h2 className="card-title">
      Nike Air Max Pulse
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">$19</div>
      
    </div>
  </div>
</div>
  </div>


  <div className="carousel-item">
  <div className="card bg-white w-96 shadow-xl">
  <figure>
    <img
      src="/carousel1-img1.png"
      alt="Shoes" />
  </figure>
  <div className="card-body text-black">
    <h2 className="card-title">
      Nike Air Max Pulse
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">$19</div>
      
    </div>
  </div>
</div>
  </div>

{/* 3 */}
<div className="carousel-item">
  <div className="card bg-white w-96 shadow-xl">
  <figure>
    <img
      src="/carousel1-img1.png"
      alt="Shoes" />
  </figure>
  <div className="card-body text-black">
    <h2 className="card-title">
      Nike Air Max Pulse
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">$19</div>
      
    </div>
  </div>
</div>
  </div>

{/* 4
 */}
 <div className="carousel-item">
  <div className="card bg-white w-96 shadow-xl">
  <figure>
    <img
      src="/carousel1-img1.png"
      alt="Shoes" />
  </figure>
  <div className="card-body text-black">
    <h2 className="card-title">
      Nike Air Max Pulse
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">$19</div>
      
    </div>
  </div>
</div>
  </div>




  
  <div className="carousel-item">
    <img
      src="/carousel1-img2.png"
      alt="Drink" />
  </div>
  

</div>
  )
}

export default Carousel