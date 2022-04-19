import React, { Component } from 'react'
import Circle from '../Circle'

export default class Home extends Component {
  constructor(props){
    super(props);
    
  }



  componentDidUpdate(){
    console.log(`componentDidMount${this.props.count}`);
    if(this.props.count === 0){
      clearInterval(this.props.timer);      
    }
    if(this.props.count1 === 0){
      clearInterval(this.props.timer1);
    }
    if(this.props.count2 === 0){
      clearInterval(this.props.timer2);
    }
  }
  componentWillUnmount(){
    clearInterval(this.props.timer);
    clearInterval(this.props.timer1);
    clearInterval(this.props.timer2);
  }
  render() {
    console.log(this.props.count);
    return (
      <div className="App">
          <Circle count={this.props.count} clickStop={this.props.clickStop} clickStart={this.props.clickStart}/>
          <Circle count={this.props.count1} clickStop={this.props.clickStop1} clickStart={this.props.clickStart1}/>
          <Circle count={this.props.count2} clickStop={this.props.clickStop2} clickStart={this.props.clickStart2}/>
          
      </div>
    )
  }
}
