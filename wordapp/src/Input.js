import React, { Component } from "react";
import TodoList from "./TodoList";
import "./Input.css";
import phrases from './phrases.json';
import TodoItems from "./TodoItems";

class Input extends React.Component {


  constructor(props, context) {
    super(props, context);
      this.state = {counter: 0};
      this.chceckWord = this.chceckWord.bind(this);
    }

  
    chceckWord(e) {
      let word  = phrases[this.state.counter]
     
      if (this._inputWord.value !== "" && this._inputWord.value === word.enword ) {
        this.setState({counter: this.state.counter+1});
        alert(`DOBRZE!, ${word.plword} - ${word.enword}`);
        this._inputWord.value = "";
      }

      else {
        return(
        alert(`ŹLE! - ???${this.state.login}???`)
        )
      }
     
      console.log();
       
      e.preventDefault();
    }

    
    render() {
        let word = phrases[this.state.counter];
      return (
        <div className="inputMain">
        <div className="header">
          <form onSubmit={this.chceckWord}>
          <h1>{word.plword}</h1>
          <input ref={(a) => this._inputWord = a} 
                  placeholder="Wpisz słowo...">
          </input>
            <button type="submit">Sprawdz</button>
          </form>
        </div>
      </div>
      );
    }
  

  
  }

  export default Input;