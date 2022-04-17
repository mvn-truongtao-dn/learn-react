import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <>
            <footer className="page-footer">
              <div className="footer-top">
                <div className="container-content">
                  <div className="content-footertop container-flex">
                    <div className="content-contact">
                      <img src="https://themes.the4.co/kalles-html/assets/images/home-sport/footer-logo.png" alt="Kalles Template"/>
                      <div className="contact-address">
                        <i className='bx bxs-map' ></i>
                        <address className="address">184 Main Rd E, St Albans
                          <br/>VIC 3021, Australia</address>
                      </div>
                      <div className="contact-mail">
                        <i className='bx bx-envelope' ></i>
                        <span>contact@company.com</span>
                      </div>
                      <div className="contact-phone">
                        <i className='bx bx-phone' ></i>
                        <span>+001 2233 456</span>
                      </div>
                      <div className="contact-icon">
                        <i className='bx bxl-facebook-circle' ></i>
                        <i className='bx bxl-twitter' ></i>
                        <i className='bx bxl-instagram-alt' ></i>
                        <i className='bx bxl-linkedin' ></i>
                        <i className='bx bxl-pinterest' ></i>
                      </div>
                    </div>
                    <div className="content-contact2">
                      <h5>Categories</h5>
                      <ul>
                        <li>Celebrations</li>
                        <li>Events</li>
                        <li>Home Decor</li>
                        <li>Seasonal Bouquet</li>
                        <li>Wedding Decor</li>
                      </ul>
                    </div>
                    <div className="content-contact2">
                      <h5>Categories</h5>
                      <ul>
                        <li>Celebrations</li>
                        <li>Events</li>
                        <li>Home Decor</li>
                        <li>Seasonal Bouquet</li>
                        <li>Wedding Decor</li>
                      </ul>
                    </div>
                    <div className="content-contact3">
                      <h5>Newsletter Signup</h5>
                      <div className="details-contact">
                        <p>Subscribe to our newsletter and get 10% off your first purchase</p>
                        <form action="">
                          <div className="form-mail">
                            <input type="text" placeholder="Your email address"/>
                            <button type="submit">Subscribe</button>
                          </div>
                          
                        </form>
                        <div className="icon-contact3">
                          <img src="https://themes.the4.co/kalles-html/assets/images/home-sport/apple_pay.svg" alt=""/>
                          <img src="https://themes.the4.co/kalles-html/assets/images/home-sport/apple_pay.svg" alt=""/>
                          <img src="https://themes.the4.co/kalles-html/assets/images/home-sport/apple_pay.svg" alt=""/>
                          <img src="https://themes.the4.co/kalles-html/assets/images/home-sport/apple_pay.svg" alt=""/>
                          <img src="https://themes.the4.co/kalles-html/assets/images/home-sport/apple_pay.svg" alt=""/>
                          <img src="https://themes.the4.co/kalles-html/assets/images/home-sport/apple_pay.svg" alt=""/>
                          <img src="https://themes.the4.co/kalles-html/assets/images/home-sport/apple_pay.svg" alt=""/>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="footer-bottom">
                <div className="content-footerbottom container-content container-flex">
                  <div>
                    Copyright © 2021 <span>Kalles</span> all rights reserved. Powered by The4
                  </div>
                  <ul >
                    <li>Shop</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Blog</li>
                  </ul>
                </div>
              </div>
            </footer>    
            </>
        )
    }
}
