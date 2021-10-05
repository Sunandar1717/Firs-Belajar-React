import React from "react";
class Greeting extends React.Component {
    constructor(props){
    super(props);
    this.state ={
        value : 0,
    }
}

tick(){
    this.setState ({value : this.state.value + 1})
}

componentDidMount(){
    setTimeout(() => this.tick(), 1000)
}


  render() {
    const { name, age } = this.props.person;
    return (
      <div>
        <h2>Welcome {name}</h2>
        <p>Umur mu : {age}</p>
        <p>nilai saat ini : {this.state.value}</p>

        {/* <button onClick={() => this.setState ({value : this.state.value + 1}) }>
            click donk bos
        </button> */}


        <button onClick={() => this.tick()  }>
            click donk bos
        </button>
      </div>
    );
  }
}

export default Greeting;
