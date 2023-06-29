import React from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import { Link } from 'react-router-dom'
import {BiArrowBack} from "react-icons/bi"

function SingleBlog() {
  return (
   <>
   <Meta title={"Dynamic Blog Name"}/>
  <BreadCrumb title="Dynamic Blog Name"/>

  <div className='blog-wrapper home-wrapper-2 py-5'>
    <div className='container-xxl'>
        <div className='row'>
            <div className='col-12'>
            <div className='single-blog-card'>
              <Link to="/blogs" className='d-flex align-items-center gap-10 fs-5'><BiArrowBack className='fs-5'/>Go back to Blogs</Link>
              <h3 className='title'>A Beautiful Sundy Morning Remaissance</h3>
              <img src='images/blog-1.jpg' className='img-fluid w-100 my-4' alt='blog'/>
              <p>You're only as good as your last collection, which is an enormous pressure.  I think there is something about luxury - It's not something people need, but It's what what they want.  It really pulls at their heart. I have a fantastic relationship with money.Scelerisque soclosqu ullamcorper urna nisl mollis vestibulum pretium commodo inceptos cum condimentum placerat diam venenatis blandit hac eget dis lacus a parturient a accumsan nisl ante vestibulum. </p>
            </div>
            </div>
           

        </div>
    </div>

  </div>
  </>
  )
}

export default SingleBlog
