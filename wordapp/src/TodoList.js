import React, { Component } from 'react';
import TodoItems from './TodoItems';
import './TodoList.css';
import phrases from './phrases.json';
import input from './Input';

class TodoList extends Component {


    constructor(props, context) {
        super(props, context);
        this.state = {
            items: phrases
          };
     
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
      }
       
      addItem(e) {
        var itemArray = this.state.items;
       
        if (this._inputPlword.value !== '' && this._inputEnword.value !== '') {
          itemArray.push({
              plword: this._inputPlword.value,
              enword: this._inputEnword.value,
              key: Date.now()
          });
       
          this.setState({
            items: itemArray
          });
       
          this._inputPlword.value = '';
          this._inputEnword.value = '';
        }
       
        console.log(itemArray);
         
        e.preventDefault();
      }

      deleteItem(key) {
        var filteredItems = this.state.items.filter(function (item) {
          return (item.key !== key);
        });
       
        this.setState({
          items: filteredItems
        });
      }


  render() {
    return (
      <div className="todoListMain">
        <div className="header">
          <form  onSubmit={this.addItem}>
          <input ref={(a) => this._inputPlword = a}
                  placeholder="pl Word">
          </input>
          <input ref={(b) => this._inputEnword = b}
                  placeholder="pl Word">
          </input>

            <button type="submit">Dodaj</button>
          </form>
        </div>
        <TodoItems entries={this.state.items}
        delete={this.deleteItem}/>
      </div>
    );
  }
}
 
export default TodoList;