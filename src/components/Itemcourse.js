import React, { Component } from 'react'

export default class Itemcourse extends Component {
    render() {
      const {content} = this.props
        return (
            <>
              <div className="card-course1 card-course">
                <div className="content-card">
                  <h3 className="sub-course">{content.title}</h3>
                  <h1 className="title-course">{content.category}</h1>
                </div>
              </div>
            </>
        )
    }
}
