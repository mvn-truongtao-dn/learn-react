import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <>
              <header>
                <div className="header-top">
                    <div className="header-container container-flex">
                        <div className="header-start">
                            <a href="">A</a>
                        </div>
                        <div className="header-mid">
                            Today deal sale off 
                            <strong className="font-size-strong">70%</strong>
                            . End in
                            <span className="number-countdown font-size-strong">00 days 00:00:00</span>
                            . Hurry Up
                            <i className='bx bx-right-arrow-alt'></i>
                        </div>
                        <div className="header-end">
                            <button><i className='bx bx-minus'></i>close</button>
                        </div>
                    </div> 
                </div>
                <div className="header-bottom">
                    <div className="header-bottom-container container-flex">
                        <div className="btn-openmenu">
                          <i className='bx bx-menu'></i>
                        </div>
                        <div className="logo">
                            <img src="https://themes.the4.co/kalles-html/assets/images/svg/kalles.svg" alt="Kalles Template" />
                        </div>
                        <nav>
                          <ul className="list-menu">
                              <li className="item-menu">
                                  <a href="" className="link-item">Demo</a>
                              </li>
                              <li className="item-menu">
                                  <a href="" className="link-item">Shop</a>
                              </li>
                              <li className="item-menu">
                                  <a href="" className="link-item">Product</a>
                              </li>
                              <li className="item-menu">
                                  <a href="" className="link-item">Sale</a>
                              </li>
                              <li className="item-menu">
                                  <a href="" className="link-item">Portfolio</a>
                              </li>
                              <li className="item-menu">
                                  <a href="" className="link-item">Lookbook</a>
                              </li>
                              <li className="item-menu">
                                  <a href="" className="link-item">Blog</a>
                              </li>
                          </ul>
                        </nav>
                        <div className="group-btn">
                            <i className='bx bx-search' ></i>
                            <i className='bx bx-user' ></i>
                            <i className='bx bx-heart' ></i>
                            <i className='bx bx-cart' ></i>
                        </div>
                    </div>
                </div>
              </header>
            </>
        )
    }
}
