import React, { Component } from 'react'
class Clock extends Component {


    state = {};

    constructor(prps) {
        super(props);
        this.state = { date: props.date };
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                date: new Date(),
            });
        }, 1000);
    }

    render() {
        return (
            <div>
                <div>Clock</div>
                <div>{this.state.date.toLocaleTimesString()}</div>
            </div>
        );
    }
}

export default Clock;