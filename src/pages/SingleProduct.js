import React from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import ProductCard from '../components/ProductCard'

function SingleProduct() {
  return (
    <>
    <Meta title={"Product Name"}/>
  <BreadCrumb title="Product Name"/>
  <div className='main-product-wrapper py-5 home-wrapper-2'>
    <div className='container-xxl'>
        <div className='row'>
            <div className='col-6'></div>
            <div className='col-6'></div>
        </div>
    </div>
  </div>
  <div className='description-wrapper py-5 home-wrapper-2'>
    <div className='container-xxl'>
        <div className='row'>
            <div className='col-12'>
                <div className='bg-white p-3'>
                <h4>Description</h4>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur nisi similique illum aut perferendis voluptas, quisquam obcaecati qui nobis officia. Voluptatibus in harum deleniti labore maxime officia esse eos? Repellat?</p>
                </div>
            </div>
        </div>
    </div>
  </div>
  <section className='reviews-wrapper py-5 home-wrapper-2'>
    <div className='container-xxl'>
        <div className='row'>
            <div className='col-12'>
                <div className='review-head'></div>
            </div>
        </div>
    </div>
  </section>
  <section className='popular-wrapper py-5 home-wrapper-2'>
    <div className='container-xxl'>
      <div className='row'>
        <div className='col-12'>
          <h3 className='section-heading'>Our Popular Products</h3>
        </div>
      </div>
      <div className='row'>
        
      <ProductCard/>
        
      </div>
    </div>
  </section>

    </>
  )
}

export default SingleProduct