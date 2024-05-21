import React, { Component } from 'react'

export default class EventHandlingCC extends Component {

    handlClick() {
        alert('Masha Pecehn');
    }

    render() {
        return (
            <div>
                <button onClick={() => this.handlClick()}>Click Me(CC)!</button>
            </div>
        )
    }
}

