import './App.css';
import React from 'react';
import MyComponent from './components/MyComponent';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { sum: 0 }
  }

  addClick = () => {
    this.setState({ sum: this.state.sum + 1 })
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <p>Clicks {this.state.sum}</p>
          <MyComponent addClick={this.addClick} />
          <MyComponent addClick={this.addClick} />
          <MyComponent addClick={this.addClick} />
        </header>
      </div>
    );
  }
}

export default App;
