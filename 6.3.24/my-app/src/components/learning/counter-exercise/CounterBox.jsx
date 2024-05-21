import React, { useState, useEffect } from 'react';
import './CounterBox.css';

const CounterBox = ({ num: numProps, callback }) => {
    const [numState, setNumState] = useState(numProps);

    // 1. After component was successfully mounted
    useEffect(() => {
        // console.log('Mounted');
    }, []);

    // 2. Listening to changes to a variable data
    useEffect(() => {
        setNumState(numProps);
    }, [numProps]);

    useEffect(() => {
        if (numProps !== numState) {
            callback(numState);
        }
    }, [numState]);

    // 3. After every render
    // בכוונה אין מערך כי אז ריאקט יודע שצריך  להפעיל כל הזמן 
    useEffect(() => {
        // console.log('After Rendered')
    });

    const handleClick = () => {
        // פעולה א סנכרונית
        setNumState(Math.floor(Math.random() * 1000000 + 1)); // Async call
        //פעולה סנכרונית 
        // props.callback(num);
        //החוסר התאמה בין שתי הפעולות האלה יוצר בעיות 
        // לכן נכתוב בדרך אחרת 

    }

    return (
        <div className='box'>
            Number: {numState}<br />
            <button onClick={handleClick}>Generate Child Random Number</button>
        </div>
    )
}

export default CounterBox