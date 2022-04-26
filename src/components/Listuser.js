import React from 'react'
import Itemuser from './Itemuser'

export default function Listuser(props) {
  const {listUser} = props;
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
            <Itemuser key={index.toString()} data={item} handleDelete={props.handleDelete}></Itemuser>
          )        
        }
      </tbody>
    </table>
  </div>
  )
}
