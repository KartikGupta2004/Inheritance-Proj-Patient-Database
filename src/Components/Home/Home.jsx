import React from 'react'
import {Link} from 'react-router-dom'
export default function Home() {
    return (
        <>
        <section className="header">
    <div className="text_box">
      <h1>MedVault</h1>
      <p>Keep your documents safe and secure at one stop</p>
      <a href="" className="sign_up">
        Sign Up
      </a>
    </div>
  </section>
  <section className="record">
    <h1>Secure Storage of Records</h1>
    <p>
      Website offers a one stop for all your medical records. It is kept at one
      place which can be accessed from anywhere at your finger tip. You have a
      systematic folder management for your medical records which can be stored
      as you find comfortable.
    </p>
    <div className="row">
      <div className="course_col">
        <h3>Secure</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam
        </p>
      </div>
      <div className="course_col">
        <h3>OTP</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam
        </p>
      </div>
      <div className="course_col">
        <h3>Reminders</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam
        </p>
      </div>
    </div>
    <Link to="" className="record_folder">
      Record Folder
    </Link>
  </section>
  <section className="pharmacy_finder">
    <div className="map_text">
      <h1> Nearby Pharmacy Finder </h1>
      <p>
        We have integrated a location service which shows you nearby pharmacies
        and hospitals according to your current location.
      </p>
      <a href="" className="sign_up">
        Nearby Medical Stores
      </a>
    </div>
  </section>
  </>
    );
}
