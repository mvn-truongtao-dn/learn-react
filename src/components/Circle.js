import React, { Component } from 'react'

export default class Circle extends Component {
    constructor(props){
      super(props);
      this.state = {
        state: true,
      }
      this.handleClickStop = this.handleClickStop.bind(this);
      this.handleClickStart = this.handleClickStart.bind(this);
    }

    handleClickStop(){
      this.props.clickStop()
      this.setState({state: !this.state.state})
    }
    handleClickStart(){
      this.props.clickStart()
      this.setState({state: !this.state.state})
      if(this.props.count === 0 )
      {
        this.handleClickStop()
      }
    }
    
    render() {
      const {count} = this.props
      return (
        <div>
          { this.state.state === true || this.props.count === 0 ? <button onClick={this.handleClickStart} className="btn-start">start</button>: <button onClick={this.handleClickStop} className="btn-stop">stop</button>}
          
          <div className="circle">
              <span>{count}</span>
          </div>
        </div>
      )
    }
}
