import React, { Component } from "react";

class Surprise extends Component {

    constructor() {
        super()
        this.state = {
            message: 'Click below button'
        }
        this.changeMessage = this.changeMessage.bind( this );
    }

    changeMessage() {
        this.setState({
            message: 'Happy Birthday'
        });
    }

    render() {
        return(
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={ this.changeMessage }>Click me</button>
            </div>
        
        );
    }
}

export default Surprise;