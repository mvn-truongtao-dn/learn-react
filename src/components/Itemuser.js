import React, { Component } from 'react'

export default class Itemuser extends Component {
  handleDelte(item){
    this.props.handleDeleteUser(item)
  }
  render() {
    const {data} = this.props
    return (
      <>
        <tr>
          <td>{data.id}</td>
          <td>{data.name}</td>
          <td>{data.password}</td>
          <td>{data.country}</td>
          <td>{data.gender}</td>
          <td>{data.info}</td>
          <td>{data.accpect.toString()}</td>
          <td>
            <button className="btn-delete" onClick={()=>this.handleDelte(data)}>Delete</button>
          </td>
        </tr>
      </>
    )
  }
}
