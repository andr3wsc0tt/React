import React from "react";
import logo from "./logo.svg";
import "./App.css";

class Tree extends React.Component{
  constructor(props){
    super(props);
    this.state = {depth : 15};
    this.tree = []
    this.width = 1;
  }

  componentWillMount(){
    let count = 0;
    for (let i = 0; i < this.state.depth; i++)
    {
      let row = [];
      for (let j = 0; j < this.width; j++)
      {
        row.push(<div className={`col${j}`} key={j}><Dot id={count}/></div>);
        count++;
      }
      this.width += 5;
      this.tree.push(<div className={`row${i}`} key={i}>{row}</div>);
    }
  }

  render(){
    return (
      <div className="tree">{this.tree}</div>
    )
  }

}

class Circle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { angle: 0, r: 100 };
    this.x = { x: 500 };
    this.y = { y: 500 };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 100);
  }

  tick() {
    this.setState({
      angle: this.state.angle + 0.1
    });
  }

  newX() {
    return this.state.r * Math.sin(this.state.angle);
  }

  newY() {
    return this.state.r * Math.cos(this.state.angle);
  }

  render() {
    return (
      <div style={{ position: "absolute", top: 500, left: 500 }}>
        <Dot l={this.newX()} t={this.newY()} />
      </div>
    );
  }
}

class Dot extends React.Component {
  constructor(props) {
    super(props);
    this.state = { weight: 0, id : this.props.id };
    this.l = { l: 0 };
    this.t = { t: 0 };
    this.r = { r: 0 };
    this.b = { b: 0 };
  }

  

  render() {
    return (
      <span
        className="dot"
        title={this.state.id}
        style={{
          position: "relative",
          top: this.props.t,
          left: this.props.l,
          right: this.props.r,
          bottom: this.props.b,
          
        }}
        
      ></span>
    );
  }
}

function App() {
  return (
    <div className="App">
      <Tree/>
    </div>
  );
}

export default App;
