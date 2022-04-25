import './App.css';
import Form from './components/Form';
import React, { Component } from 'react'
import Listuser from './components/Listuser';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      listUser: [{
        id: 5,
        name:"tao quang truong",
        password: "123456789",
        country: "vn",
        gender: "male",
        info: "abcd",
        accpect: true
      },
      {
        id: 6,
        name:"hoang duc thanh",
        password: "123456789",
        country: "vn",
        gender: "male",
        info: "abcd",
        accpect: true
      },
      {
        id: 7,
        name:"tao quang truong",
        password: "123456789",
        country: "vn",
        gender: "male",
        info: "abcd",
        accpect: true
      },
      {
        id: 8,
        name:"nguyen thanh long",
        password: "123456789",
        country: "vn",
        gender: "male",
        info: "abcd",
        accpect: true
      },
      {
        id: 1,
        name:"tao quang truong",
        password: "123456789",
        country: "vn",
        gender: "male",
        info: "abcd",
        accpect: true
      },
      {
        id: 2,
        name:"ho le huy",
        password: "123456789",
        country: "vn",
        gender: "male",
        info: "abcd",
        accpect: true
      },
      {
        id: 3,
        name:"ho van khoi",
        password: "123456789",
        country: "vn",
        gender: "male",
        info: "abcd",
        accpect: true
      },
      {
        id: 4,
        name:"vo duc nhan",
        password: "123456789",
        country: "vn",
        gender: "male",
        info: "abcd",
        accpect: true
      },
    ]
    }
    this.handleAddUser = this.handleAddUser.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleDeleteUser = this.handleDeleteUser.bind(this);
  }

  handleAddUser(user){
    this.setState(state =>({
      listUser: [
        ...state.listUser,
        user
      ]
    }));
    console.log(this.state.listUser);
  }
  handleDeleteUser(item){
    const data = this.state.listUser.filter(i => i.id !== item.id)
    this.setState({listUser: data})
  }

  render() {
    console.log(this.state.listUser);

    return (
      <div className="App">
        <Listuser listUser={this.state.listUser} handleDeleteUser={this.handleDeleteUser}></Listuser>
        <Form handleAddUser={this.handleAddUser} ></Form>
     </div>
    )
  }
}
