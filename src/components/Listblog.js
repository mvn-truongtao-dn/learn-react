import React, { Component } from 'react'
import Itemblog from './Itemblog'

export default class Listblog extends Component {
    render() {
      const {listblog} = this.props
        return (
            <>
              <div className="list-blog">
                { listblog.map((item,index) => 
                  <Itemblog key={index.toString()} data={item}></Itemblog>
                  )}
              </div>
            </>
        )
    }
}
