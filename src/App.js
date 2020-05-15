import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation';
import Char from './Char/Char'; 

//Test commit

class App extends Component {

  state = {
    userInput : ''
  }
  inputChangedHandler = (event) =>{
    this.setState({userInput: event.target.value});
  }

  deleteCharHandler = (index) =>{
    const text = this.state.userInput.split('');
    text.splice(index,1);
    const updatedText = text.join('');
    this.setState({userInput : updatedText});
  }


  render() {

    const charList= this.state.userInput.split('').map((ch,index)=>{
      return <Char 
      character = {ch} 
      key ={index}
      clicked = {()=>this.deleteCharHandler(index)} />;
    });

    return (
      <div className="App">
        <h1>Assignment-2</h1>
        <input type="text" 
          onChange={this.inputChangedHandler} 
          value={this.state.userInput}></input>
        <p>{this.state.userInput}</p>
        <hr></hr>
        <Validation inputLength={this.state.userInput.length}></Validation>
        {charList}
      </div>
    );
  }
}

export default App;
