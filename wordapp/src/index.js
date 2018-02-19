import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Input from './Input';
import TodoList from './TodoList';

var destination = document.querySelector('#container');

function ShowList(props) {
  if (!props.warn) {
    return null;
  }

  return (
    <div className="warning">
      <TodoList/>
    </div>
  );
}

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showList: false}
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleToggleClick() {
    this.setState(prevState => ({
      showList: !prevState.showList
    }));
  }

  render() {
    return (
      <div>
        <ShowList warn={this.state.showList} />
        <button className="showList" onClick={this.handleToggleClick}>
          {this.state.showList ? 'Ukryj' : 'Pokaz liste słów'}
        </button>
      </div>
    );
  }
}

ReactDOM.render(
    <div>
        <Input/>
        <Page/>
    </div>,
    destination
);