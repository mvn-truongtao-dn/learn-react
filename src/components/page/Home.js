import React, { Component } from 'react'
import Listblog from '../Listblog';
import Listcourse from '../Listcourse';
import Listproduct from '../Listproduct'

export default class Home extends Component {
    constructor(prorps) {
      super(prorps);
      this.state = {
        listproducttype : [{
          src: "/image/pr-04.jpg",
          title: "Nike As Dri-Fit Training",
          price: "65.00"
        },
        {
          src: "/image/pr-04.jpg",
          title: "Nike As Dri-Fit Training",
          price: "65.00"
        },
        {
          src: "/image/pr-04.jpg",
          title: "Nike As Dri-Fit Training",
          price: "65.00"
        },
        {
          src: "/image/pr-04.jpg",
          title: "Nike As Dri-Fit Training",
          price: "65.00"
        },
        
        ],
        listproductselling : [
          {
            src: "/image/pr-04.jpg",
            title: "Nike As Dri-Fit Training",
            price: "65.00"
          },
          {
            src: "/image/pr-04.jpg",
            title: "Nike As Dri-Fit Training",
            price: "65.00"
          },
          {
            src: "/image/pr-04.jpg",
            title: "Nike As Dri-Fit Training",
            price: "65.00"
          },
          {
            src: "/image/pr-04.jpg",
            title: "Nike As Dri-Fit Training",
            price: "65.00"
          },
          {
            src: "/image/pr-04.jpg",
            title: "Nike As Dri-Fit Training",
            price: "65.00"
          },
          {
            src: "/image/pr-04.jpg",
            title: "Nike As Dri-Fit Training",
            price: "65.00"
          },
          {
            src: "/image/pr-04.jpg",
            title: "Nike As Dri-Fit Training",
            price: "65.00"
          },
          {
            src: "/image/pr-04.jpg",
            title: "Nike As Dri-Fit Training",
            price: "65.00"
          },
        ],
        listcourse: [
          {
            title: "ACCESSORIES",
            category: "for man"
          },
          {
            title: "TRAINING CLOTHING",
            category: "for women"
          },
          {
            title: "-50% OFF",
            category: "summer sale"
          },
        ],
        listblog: [
          {
            src: "image/blog-01.jpg",
            title: "Tips At-home Cardio Workouts",
            date: "September 1, 2020",
            content: "Time to get your sweat on with this workout for a flat stomach! These are the 10 best moves to tighten up that core"
          },
          {
            src: "image/blog-01.jpg",
            title: "Tips At-home Cardio Workouts",
            date: "September 1, 2020",
            content: "Time to get your sweat on with this workout for a flat stomach! These are the 10 best moves to tighten up that core"
          },
          {
            src: "image/blog-01.jpg",
            title: "Tips At-home Cardio Workouts",
            date: "September 1, 2020",
            content: "Time to get your sweat on with this workout for a flat stomach! These are the 10 best moves to tighten up that core"
          },
        ]
      }
    }
    componentDidUpdate() {
      return false;
    }
    render() {
        return (
            <>
              <main>
                <section className="banner-section">
                  <div className="container-content">
                    <div className="content-details content-details-card">
                      <h4 className="sub-title">push hader/run faster & go further</h4>
                      <br/>
                      <h1 className="title">trainong's clothing</h1>
                      <h1 className="title">lookbook</h1>
                      <br/>
                      <div className="banner-btn">
                        <button className="btn-shopnow">Shop now</button>
                        <button className="btn-viewlook">View the look</button>
                      </div>
                    </div>
                  </div>
                </section>
                <section className="course-type">
                  <div className="container-content">
                    <Listcourse listcourse={this.state.listcourse}></Listcourse>
                  </div>
                </section>
                <section className="type-tab-collection">
                  <div className="container-content">
                    <div className="tab-collection">
                      <ul className="list-tab">
                        <li className="item-tag active">
                          <a href="" className="link-tag ">featured</a>
                        </li>
                        <li className="item-tag">
                          <a href="" className="link-tag">new arrivals</a>
                        </li>
                        <li className="item-tag">
                          <a href="" className="link-tag">on sale</a>
                        </li>
                      </ul>
                    </div>
                    <Listproduct listproduct={this.state.listproducttype}/>
                  </div>
                
                </section>
                <section className="banner-section2">
                  <div className="container-content">
                    <div className="content-details content-details-card">
                      <h4 className="sub-title">black friday</h4>
                      <br/>
                      <h1 className="title">save 50% off</h1>
                      <h1 className="title">first online purchase</h1>
                      <br/>
                      <div className="banner-btn">
                        <button className="btn-viewlook">View the look</button>
                      </div>
                    </div>
                  </div>
                </section>
                <section className="selling-section">
                  <div className="container-content header_content_section">
                    <div className="content-selling">
                      <h1 className="title-selling">top selling</h1>
                      <div className="icon">
                        <span></span>
                        <i className='bx bx-dumbbell'></i>
                        <span></span>
                      </div>
                      <span className="subtitle-selling">Whether your goals are to improve weight or body composition, increase strength and function, or improve overall
                        <br/>
                        health, resistance training can help you get there.
                      </span>
                    </div>
                    <Listproduct listproduct={this.state.listproductselling}/>
                  </div>
                
                </section>
                <div className="line-section">
                  <div className="container-content-line container-content">
                    <div className="line-break-page"></div>
                  </div>
                </div>
                <section className="lastnew-section">
                  <div className="container-content header_content_section">
                    <div className="content-selling">
                      <h1 className="title-selling">Latest News</h1>
                      <div className="icon">
                        <span></span>
                        <i className='bx bx-dumbbell'></i>
                        <span></span>
                      </div>
                      <span className="subtitle-selling">Increased caloric expenditure can result from resistance training both due to acute effects from training sessions
                        <br/>
                        and long-term effects from increased muscle mass.
                      </span>
                    </div>
                    <Listblog listblog={this.state.listblog}></Listblog>
                  </div>
                
                </section>  
                <div className="line-section">
                  <div className="container-content-line container-content">
                    <div className="line-break-page"></div>
                  </div>
                </div>
                <section className="type-shipping">
                  <div className="container-content">
                    <div className="list-type">
                      <div className="item-type">
                        <div className="icon-truck">
                          <i className='bx bxs-truck' ></i>
                        </div>
                        <div className="content-type">
                          <h3>FREE SHIPPING UK&UK</h3>
                          <p>Free shipping on all orders above $100</p>
                        </div>
                      </div>
                      <div className="item-type">
                      <div className="icon-truck">
                        <i className='bx bx-headphone' ></i>
                      </div>
                      <div className="content-type">
                        <h3>SUPPORT 24/7</h3>
                        <p>Free shipping on all orders above $100</p>
                      </div>
                    </div>
                    <div className="item-type">
                      <div className="icon-truck">
                        <i className='bx bxs-bank' ></i>
                      </div>
                      <div className="content-type">
                        <h3>30 DAYS MONEY BACK</h3>
                        <p>Free shipping on all orders above $100</p>
                      </div>
                    </div>
                  
                    </div>
                  </div>
                </section>
              </main>  
            </>
        )
    }
}
