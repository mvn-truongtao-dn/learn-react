import React, { Component } from 'react'
import Itemuser from './Itemuser'

export default class Listuser extends Component {
  render() {
    const {listUser} = this.props
    console.log(listUser);
    return (
      <div className="listuser">
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Password</th>
              <th>Country</th>
              <th>Gender</th>
              <th>info</th>
              <th>Accepct</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              listUser.map((item,index)=>
                <Itemuser key={index.toString()} data={item} handleDeleteUser={this.props.handleDeleteUser}></Itemuser>
              )
            }
          </tbody>
        </table>
      </div>
    )
  }
}
