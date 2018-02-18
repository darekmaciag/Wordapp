import React, { Component } from "react";
import FlipMove from 'react-flip-move';
import phrases from './phrases.json';
 
class TodoItems extends Component {
  constructor(props, context) {
    super(props, context); 
    this.createTasks = this.createTasks.bind(this);
    this.showPhrases = this.showPhrases.bind(this);
  }
 
  createTasks(item) {
    return <li onClick={() => this.delete(item.key)} 
                key={item.key}>{item.plword} - {item.enword}</li>
  }
 
showPhrases(item){
  return <li onClick={() => this.delete(item.key)} 
                key={item.key}>{item.plword} - {item.enword}</li>
}

  delete(key) {
    this.props.delete(key);
  }

  render() {
    var todoEntries = this.props.entries;
    var listItems = todoEntries.map(this.createTasks);
    var phrasesItems = phrases.map(this.showPhrases);
    return (
      <ul className="theList">
        <FlipMove duration={250} easing="ease-out">
        {phrasesItems}
          {listItems}
          </FlipMove>
      </ul>
    );
  }
};
 
export default TodoItems;