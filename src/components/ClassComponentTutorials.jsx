import { Component } from "react";

class ClassComponentTutorials extends Component {
    // Constructor
    constructor(props) {
        super(props);

        // State
        this.state = {
            count: 0
        }

        this.countHandleClickPlus = this.countHandleClickPlus.bind(this);
        this.countHandleClickMinus = this.countHandleClickMinus.bind(this);
    } 

    // Event
    countHandleClickPlus() {
        this.setState({count: this.state.count+1})
    }
    countHandleClickMinus() {
        this.setState({count: this.state.count-1})
    }

    // Render
    render() {
        return (
            <div>
                <h3>Count: {this.state.count}</h3>
                <button onClick={this.countHandleClickPlus}>+</button>
                <button onClick={this.countHandleClickMinus}>-</button>
            </div>
        )
    }
}

export default ClassComponentTutorials