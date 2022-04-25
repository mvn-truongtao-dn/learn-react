import React, { Component } from 'react'

export default class Form extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: "",
      password: "",
      country: "vn",
      gender: "male",
      info: "",
      accpect: true,
      stateNotification: false
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit(e) {
    e.preventDefault();
    const target = this.state
    const idItem = Math.floor(Math.random() *1000)
    if(target.name === "" || target.password === ""){ 
      this.setState({stateNotification: !this.state.stateNotification})
    }else{
      this.props.handleAddUser({
        id: idItem,
        name: target.name,
        password: target.password,
        country: target.country,
        gender: target.gender,
        info: target.info,
        accpect: target.accpect
      });
    }
    this.setState({
      name: "",
      password: "",
      country: "vn",
      gender: "male",
      info: "",
      accpect: true,
    })
    console.log(this.state);
  }

  handleChange = (e) => {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked: target.value;
    const name = target.name;
    this.setState({[name]: value})
  }
  render() {
    return (
      <form onSubmit={(e)=> this.handleSubmit(e)}>
        {
          this.state.stateNotification === false ? 
          null :   
          <div className="row">
            <h2 className="notification">Can nhap day du thong tin!</h2>
          </div>
        }
        <div className="row">
          <label htmlFor="name">Name</label>
          <div className="col-12">
          <input value={this.state.name} type="text" id="name" name="name" onChange={this.handleChange} />
          </div>
        </div>
        <div className="row">
          <label htmlFor="password">Password</label>
          <div className="col-12">
            <input value={this.state.password} type="password" id="password" name="password" onChange={this.handleChange} />
          </div>
        </div>
        <div className="row">
          <label htmlFor="">Country</label>
          <div className="col-6">
             <select name="country" value={this.state.country} onChange={this.handleChange}>
              <option value="vn">Vietnam</option>
              <option value="usa">United States</option>
              <option value="jav">Japan</option>
            </select>
          </div>
          
        </div>
        <div className="row">
          <label htmlFor="gender">Gender</label>
          <div className="col">
            <div className="col-6">
              <input checked={this.state.gender === "male"} type="radio" name="gender" id="male" value="male" onChange={this.handleChange}/>
              <label htmlFor="male">Male</label>
            </div>
            <div className="col-6">
              <input checked={this.state.gender === "female"} type="radio" name="gender" id="female" value="female" onChange={this.handleChange}/>
              <label htmlFor="female">Female</label>
            </div>
        
          </div>
         
        </div>
        <div className="row">
          <label htmlFor="info">Information</label>
          <div className="col-12">
           <textarea value={this.state.info} name="info" id="info" cols="30" rows="10" onChange={this.handleChange}></textarea>
          </div>
        </div>
        <div className="row">
          <label htmlFor="accpect">Do you agree to the terms?</label>
          <input  
            checked={this.state.accpect}
            id="accpect" name="accpect" 
            type="checkbox" 
            onChange={this.handleChange}
            />
        </div>
        <div className="col-12">
          <input type="submit" value="Submit"/>
        </div>
      </form>
    )
  }
}
