import React from 'react'

const EventHandlingCC = () => {

    const handleClick = () => {
        alert('Masha Pechen');
    }
    return (
        <div>
            <button onClick={handleClick}>Click Me(FC) </button>
        </div>
    )
}

export default EventHandlingCC