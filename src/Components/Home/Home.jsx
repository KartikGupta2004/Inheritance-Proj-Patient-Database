import React from 'react'
import {Link} from 'react-router-dom'
import "../Medical News/slidernews"
import '../Medical News/slidernews.css'
import { useAuthContext } from '../Hooks/useAuthContext'
export default function Home() {
  const {user} = useAuthContext();
    return (
      <>
        <section className='header h-screen'>
          <div className='text_box'>
            <h1>MedVault</h1>
            <p>Keep your documents safe and secure at one stop</p>
            {user ?"": (
              <Link to='/signup'>
                <a className='sign_up no-underline hover:text-white'>Sign Up</a>
              </Link>
            )}
          </div>
        </section>
        {/* <section className='record'>
          <h1>Secure Storage of Records</h1>
          <p>
            Website offers a one stop for all your medical records. It is kept
            at one place which can be accessed from anywhere at your finger tip.
            You have a systematic folder management for your medical records
            which can be stored as you find comfortable.
          </p>
          <div className='row'>
            <div className='course_col'>
              <h3>Secure</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam
              </p>
            </div>
            <div className='course_col'>
              <h3>OTP</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam
              </p>
            </div>
            <div className='course_col'>
              <h3>Reminders</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam
              </p>
            </div>
          </div>
          <Link
            to='/recordform'
            className='record_folder no-underline hover:text-white'
          >
            Record Folder
          </Link>
        </section> */}
        <section className='pharmacy_finder'>
          <div className='map_text'>
            <h1> Nearby Pharmacy Finder </h1>
            <p>
              We have integrated a location service which shows you nearby
              pharmacies and hospitals according to your current location.
            </p>
            <Link
              to='/nearbypharmacy'
              className='sign_up no-underline hover:text-white'
            >
              Nearby Medical Stores
            </Link>
          </div>
        </section>
        <section className='newslider mt-40'>
          <div
            id='hero-carousel'
            className='carousel slide'
            data-bs-ride='carousel'
          >
            <div className='carousel-indicators'>
              <button
                type='button'
                data-bs-target='#hero-carousel'
                data-bs-slide-to={0}
                className='active'
                aria-current='true'
                aria-label='Slide 1'
              />
              <button
                type='button'
                data-bs-target='#hero-carousel'
                data-bs-slide-to={1}
                aria-label='Slide 2'
              />
              <button
                type='button'
                data-bs-target='#hero-carousel'
                data-bs-slide-to={2}
                aria-label='Slide 3'
              />
            </div>
            <div className='carousel-inner' style={{ paddingTop: 0 }}>
              <div className='carousel-item active c-item'>
                <img
                  className='d-block w-100 c-img'
                  alt='Slide 1'
                  id='slide1_img'
                />
                <div
                  className='carousel-caption top-0 mt-4 flex flex-col justify-center items-center'
                  id='caption'
                >
                  <p
                    className='mt-5 text-3xl md:text-4xl lg:text-5xl fw-bolder'
                    id='slide1_head'
                  />
                  <h1
                    className='mt-5 text-2xl md:text-3xl lg:text-4xl'
                    id='slide1_desc'
                  />
                  <a href='/medicalnews'>
                    <button className='bg-blue-600 text-white rounded-lg px-6 py-4 text-xl md:text-3xl mt-5'>
                      Get Latest News
                    </button>
                  </a>
                </div>
              </div>
              <div className='carousel-item c-item'>
                <img
                  className='d-block w-100 c-img'
                  alt='Slide 2'
                  id='slide2_img'
                />
                <div className='carousel-caption top-0 mt-4 flex flex-col justify-center items-center'>
                  <p
                    className='mt-5 text-3xl md:text-4xl lg:text-5xl fw-bolder'
                    id='slide2_head'
                  />
                  <h1
                    className='mt-5 text-2xl md:text-3xl lg:text-4xl'
                    id='slide2_desc'
                  />
                  <a href='/medicalnews'>
                    <button
                      className='bg-blue-600 text-white rounded-lg px-6 py-4 text-xl md:text-3xl mt-5'
                      data-bs-toggle='modal'
                      data-bs-target='#booking-modal'
                    >
                      Get Latest News
                    </button>
                  </a>
                </div>
              </div>
              <div className='carousel-item c-item'>
                <img
                  className='d-block w-100 c-img'
                  alt='Slide 3'
                  id='slide3_img'
                />
                <div className='carousel-caption top-0 mt-4 flex flex-col justify-center items-center'>
                  <p
                    className='mt-5 text-3xl md:text-4xl lg:text-5xl fw-bolder'
                    id='slide3_head'
                  />
                  <h1
                    className='mt-5 text-2xl md:text-3xl lg:text-4xl'
                    id='slide3_desc'
                  />
                  <a href='/medicalnews'>
                    <button
                      className='bg-blue-600 text-white rounded-lg px-6 py-4 text-xl md:text-3xl mt-5'
                      data-bs-toggle='modal'
                      data-bs-target='#booking-modal'
                    >
                      Get Latest News
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <button
              className='carousel-control-prev'
              type='button'
              data-bs-target='#hero-carousel'
              data-bs-slide='prev'
            >
              <span className='carousel-control-prev-icon' aria-hidden='true' />
              <span className='visually-hidden'>Previous</span>
            </button>
            <button
              className='carousel-control-next'
              type='button'
              data-bs-target='#hero-carousel'
              data-bs-slide='next'
            >
              <span className='carousel-control-next-icon' aria-hidden='true' />
              <span className='visually-hidden'>Next</span>
            </button>
          </div>
        </section>
      </>
    );
}
