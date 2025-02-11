import React, {Component} from 'react';
class StateFullHello extends Component {
    constructor() {
        super();
        this.state = { message: "Hello World from Stateful" };
    }

    render() {
        return React.createElement("h1", null, this.state.message);
    }
}

export default StateFullHello