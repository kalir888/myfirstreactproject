import React, { Component } from "react";

class Counter extends Component {

    constructor() {
        super()
        this.state = {
            count: 0
        }
        this.increment = this.increment.bind( this );
        this.incrementFive = this.incrementFive.bind( this );
    }

    /* increment() {
        this.setState({
            count: this.state.count + 1
        });
    } */
    increment() {
        this.setState((prevState,props) => ({
            count: prevState.count + 1
        }));
    }
    

    incrementFive() {
        for(let i = 0; i < 5; i++) {
            this.increment();
        }
    }

    render() {
        return(
            <div>
                <h1>Count : { this.state.count }</h1>
                <button onClick={ this.incrementFive }>Increment</button>
            </div>
        );
    }
}

export default Counter;