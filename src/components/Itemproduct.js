import React, { Component } from 'react'

export default class Itemproduct extends Component {
    render() {
      const {content} = this.props
        return (
            <>
            <div className="card-collection">
              <img src={content.src} alt=""/>
              <div className="content-collection card-content">
                <a className="title-card">{content.title}</a>
                <span className="price-card">${content.price}</span>
                <ul className="list-color">
                  <li className="item-color1">
                    
                  </li>
                  <li className="item-color2">
                    
                  </li>
                  <li className="item-color3">
                    
                  </li>
                </ul>
              </div>
            </div>    
            </>
        )
    }
}
