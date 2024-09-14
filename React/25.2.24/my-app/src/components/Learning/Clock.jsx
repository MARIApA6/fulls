import React, { Component } from 'react'
import './Clock.css';

class Clock extends Component {

    timerId = null;

    constructor(props) {
        super(props);
        this.state = {
            date: props.date,
            name: props.name
        };
    }

    componentDidMount = () => {
        this.timerId = setInterval(() => {
            this.setState({
                date: new Date(),
            });
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    render() {
        return (
            <div className="clock">
                <div>Clock</div>
                <div>{this.state.date.toLocaleTimeString()}</div>
            </div>
        )
    }
}


export default Clock;