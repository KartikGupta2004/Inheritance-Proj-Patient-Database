import React from 'react'
import { Link } from 'react-router-dom'
import './slidernews.css'
import './news'
function News() {
  return (
    <>
    <div className="main-body">
  <div className="container py-5">
    <h1 className="text-center text-4xl font-bold mb-8">Latest Medical News</h1>
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 py-5">
      <div className="col">
        <div className="card">
          <img className="card-img-top" id="img1" />
          <div className="card-body">
            <h5 className="card-title text-2xl" id="title1" />
            <p className="card-text mt-24 text-xl" id="desc1" />
          </div>
          <div className="mb-5 flex justify-content-around">
            <Link id="link1" style={{ color: "white" }}>
              <button className="btn btn-primary">Read More..</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card">
          <img className="card-img-top" id="img2" />
          <div className="card-body">
            <h5 className="card-title text-3xl" id="title2" />
            <p className="card-text mt-24" id="desc2" />
          </div>
          <div className="mb-5 d-flex justify-content-around">
            <Link id="link2" style={{ color: "white" }}>
              <button className="btn btn-primary">Read More..</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card">
          <img className="card-img-top" id="img3" />
          <div className="card-body">
            <h5 className="card-title text-3xl" id="title3" />
            <p className="card-text mt-24" id="desc3" />
          </div>
          <div className="mb-5 d-flex justify-content-around">
            <Link id="link3" style={{ color: "white" }}>
              <button className="btn btn-primary">Read More..</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card">
          <img className="card-img-top" id="img4" />
          <div className="card-body">
            <h5 className="card-title text-3xl" id="title4" />
            <p className="card-text mt-24" id="desc4" />
          </div>
          <div className="mb-5 d-flex justify-content-around">
            <Link id="link4" style={{ color: "white" }}>
              <button className="btn btn-primary">Read More..</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card">
          <img className="card-img-top" id="img5" />
          <div className="card-body">
            <h5 className="card-title text-3xl" id="title5" />
            <p className="card-text mt-24" id="desc5">
              .
            </p>
          </div>
          <div className="mb-5 d-flex justify-content-around">
            <Link id="link5" style={{ color: "white" }}>
              <button className="btn btn-primary">Read More..</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card">
          <img className="card-img-top" id="img6" />
          <div className="card-body">
            <h5 className="card-title text-3xl" id="title6" />
            <p className="card-text mt-24" id="desc6" />
          </div>
          <div className="mb-5 d-flex justify-content-around">
            <Link id="link6" style={{ color: "white" }}>
              <button className="btn btn-primary">Read More..</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card">
          <img className="card-img-top" id="img7" />
          <div className="card-body">
            <h5 className="card-title text-3xl" id="title7" />
            <p className="card-text mt-24" id="desc7" />
          </div>
          <div className="mb-5 d-flex justify-content-around">
            <Link id="link7" style={{ color: "white" }}>
              <button className="btn btn-primary">Read More..</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card">
          <img className="card-img-top" id="img8" />
          <div className="card-body">
            <h5 className="card-title text-3xl" id="title8" />
            <p className="card-text mt-24" id="desc8" />
          </div>
          <div className="mb-5 d-flex justify-content-around">
            <Link id="link8" style={{ color: "white" }}>
              <button className="btn btn-primary">Read More..</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card">
          <img className="card-img-top" id="img9" />
          <div className="card-body">
            <h5 className="card-title text-3xl" id="title9" />
            <p className="card-text mt-24" id="desc9" />
          </div>
          <div className="mb-5 d-flex justify-content-around">
            <Link id="link9" style={{ color: "white" }}>
              <button className="btn btn-primary">Read More..</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default News