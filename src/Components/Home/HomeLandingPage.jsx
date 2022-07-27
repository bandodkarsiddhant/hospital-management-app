import React from 'react';
import './LandingPage.css'

import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarToggler,
  MDBNavbarLink,
  MDBContainer,
  MDBIcon
} from 'mdb-react-ui-kit';


export default function HomeLandingPage() {
  return (
    <header>
      <MDBNavbar expand='lg' light bgColor='white' style={{padding:'0'}}>
        <MDBContainer fluid>
          <MDBNavbarToggler
            aria-controls='navbarExample01'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <MDBIcon fas icon='bars' />
          </MDBNavbarToggler>
          {/* <div className='collapse navbar-collapse' id='navbarExample01'>
            <MDBNavbarNav right className='mb-2 mb-lg-0'>
              <MDBNavbarItem active>
                <MDBNavbarLink aria-current='page' href='#'>
                  Home
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='#'>Features</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='#'>Pricing</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='#'>About</MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </div> */}
        </MDBContainer>
      </MDBNavbar>

      <div
        id='intro-example'
        className='p-5 text-center bg-image'
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=868&q=80')",backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPosition:'center' }}
      >
        <div className='mask' 
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)',margin:'4% auto',height:'22rem' }}
        >
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-warning'>
              <h1 className='mb-3'>Healthy Habit's Are Your Body's Desire</h1>
              <h5 className='mb-4'>Take Good Care </h5>
              <a
                className='btn btn-outline-light btn-lg m-2'
                href='/admin-login'
                target='_blank'
                role='button'
                rel='nofollow'
                
              >
                Admin Login
              </a>
              <a
                className='btn btn-outline-light btn-lg m-2'
                href='/staff-login'
                target='_blank'
                role='button'
              >
                Staff Login
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}