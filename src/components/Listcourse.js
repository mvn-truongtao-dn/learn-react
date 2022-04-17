import React, { Component } from 'react'
import Itemcourse from './Itemcourse'

export default class Listcourse extends Component {
    render() {
      const {listcourse} = this.props
      console.log(listcourse);
        return (
            <>
              <div className="list-card-course">
                { listcourse.map((item,index) => 
                  <Itemcourse key={index.toString()} content={item}></Itemcourse>
                )}
              </div>
            </>
        )
    }
}
