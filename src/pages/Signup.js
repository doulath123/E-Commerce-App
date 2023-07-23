import React from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import { Link } from 'react-router-dom'
import Container from '../components/Container'
import CustomInput from '../components/CustomInput'

function Signup() {
  return (
    <>
     <Meta title={"Sign up"}/>
  <BreadCrumb title="Sign up"/>
  <Container class1="login-wrapper py-5 home-wrapper-2">
  <div className='row'>
        <div className='col-12'>
            <div className='auth-card'>
                <h3 className='text-center mb-3'>Create Account</h3>
                <form action='' className='d-flex flex-column gap-15'>
                    <CustomInput type="text" name="name" placeholder='Name'  />
                    <CustomInput type="tel" name="mobile" placeholder='Mobile Number'  />
                    <CustomInput type="email" name="email" placeholder='Email'  />
                    <CustomInput type="password" name='password' placeholder='Password' />

                    <div>
                        
                        <div className='mt-3 d-flex justify-content-center flex-column gap-15 align-items-center'>
                            <button className='button border-0' type='submit'>Create</button>
                                                  </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
  </Container>
    </>
  )
}

export default Signup
