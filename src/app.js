import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [
        { name: "Bread" },
        { name: "Butterfly" },
        { name: "Milk" }
      ],
      aha: false,
    };
  }

  handleClick() {
    this.setState({aha: true})
  }

  render() {
    let { items, aha } = this.state;
    if (aha) {
      // items = items.slice(); // Unless we clone a new items array.
      items[0].name = "Cookie";
    }

    return (
      <div>
        <button onClick={::this.handleClick}>CLICK ME</button>
        <ShoppingList items={items} />
      </div>
    );
  }
}

class ShoppingList extends Component {
  componentWillReceiveProps(nextProps) {
    if (this.props.items !== nextProps.items) {
      alert('Where is my bread?'); // This line will never be called.
    }
  }

  render() {
    const { items } = this.props;

    return (
      <ul>
        {
          (items.map((item, index) => (
            <li key={index}>{item.name}</li>
          )))
        }
      </ul>
    );
  }
}

ReactDOM.render(<App />, window.app);
