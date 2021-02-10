import React from 'react';

class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { number: 0 }
    }

    addOneFunction = () => {
        this.setState({ number: this.state.number + 1 })
        this.props.addClick()
    }

    render() {
        return (
            <div>
                <p>{this.state.number}</p>
                <button onClick={this.addOneFunction}>Plus 1</button>
            </div>
        );
    }
}

export default MyComponent;