import logo from './logo.svg';
import React from 'react';
import './App.css';
import Home from './components/Page/Home';
import About from './components/Page/About';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 50,
      count1: 40,
      count2: 30,
      page: "home"
    }
    this.startTimer = this.startTimer.bind(this);
    this.handleClickStop = this.handleClickStop.bind(this);
    this.handleClickStart = this.handleClickStart.bind(this);
    this.handleClickStop1 = this.handleClickStop1.bind(this);
    this.handleClickStart1 = this.handleClickStart1.bind(this);
    this.handleClickStop2 = this.handleClickStop2.bind(this);
    this.handleClickStart2 = this.handleClickStart2.bind(this);
    this.handleRedirect = this.handleRedirect.bind(this);
  }

  startTimer(){
    this.timer = setInterval(()=>{
      console.log("ok");
      this.setState({count: this.state.count - 1})

    }
    ,1000)
  };

  startTimer1(){
    this.timer1 = setInterval(()=>{
      console.log("ok");
      this.setState({count1: this.state.count1 - 1})
    }
    ,1000)
  };

  startTimer2(){
    this.timer2 = setInterval(()=>{
      console.log("ok");
      this.setState({count2: this.state.count2 - 1})
    }
    ,1000)
  };

  handleClickStop(){
    clearInterval(this.timer);
  };

  handleClickStart(){
    this.startTimer()
  };

  handleClickStart1(){
    console.log("start1");
    this.startTimer1()
  };

  handleClickStop1(){
    clearInterval(this.timer1);
  };

  handleClickStart2(){
    console.log("start2");
    this.startTimer2()
  };
  handleClickStop2(){
    clearInterval(this.timer2);
  }

  handleRedirect(e,pageName){
    e.preventDefault();
    this.setState({ page: pageName})
  }
  render () {
    return (
      <>
        <div className="nav-menu">
          <ul className="list-menu">
            <li className="item-menu">
              <a href="" className="link-item" onClick={(e) => this.handleRedirect(e,"home")}>Home</a>
            </li>
            <li className="item-menu">
              <a href="" className="link-item" onClick={(e) => this.handleRedirect(e,"about")}>About</a>
            </li>
          </ul>
        </div>
        { 
        this.state.page === "home" ? 
        <Home 
          count={this.state.count} 
          count1={this.state.count1} 
          count2={this.state.count2} 
          clickStop={this.handleClickStop} 
          clickStart={this.handleClickStart} 
          clickStop1={this.handleClickStop1} 
          clickStart1={this.handleClickStart1} 
          clickStop2={this.handleClickStop2} 
          clickStart2={this.handleClickStart2} 
          timer={this.timer}
          timer2={this.timer2}
          timer1={this.timer1}
          ></Home>
        :<About/>
        }
      </>
    );
  }
 
}

export default App;
