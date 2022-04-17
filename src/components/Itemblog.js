import React, { Component } from 'react'

export default class Itemblog extends Component {
    render() {
      const {data} = this.props
        return (
            <>
              <div className="item-blog">
                <img src={data.src} alt=""/>
                <div className="post-info">
                  <h4 className="post-title">{data.title}</h4>
                  <span className="post-time">on <span><time>{data.date}</time></span></span>
                </div>
                <div className="post-content">
                  {data.content}
                </div>
              </div>
            </>
        )
    }
}
