import React, { Component } from 'react'
import Itemproduct from './Itemproduct'

export default class Listproduct extends Component {
  componentDidMount() {

  }
  
    render() {
      const {listproduct} = this.props
      this.componentDidMount(listproduct)
      console.log(listproduct.length);
        return (
            <>
              <div className="collection">
                <div className="list-card-collection container-content container-flex">
                  { listproduct.map((item,index) => 
                    <Itemproduct key={index.toString()} content={item}></Itemproduct>
                  
                  )}
                </div>
              </div>
            </>
        )
    }
}
