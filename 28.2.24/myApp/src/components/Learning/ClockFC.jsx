import React, { useState, useEffect } from 'react';

const ClockFC = (props) => {
    const [date, setDate] = useState(props.date);
    useEffect(() => {
        console.log('');
        const timerID = setInterval(() => {
            setDate(new Date())
        }, 1000);

        return () => {
            console.log('');
            clearInterval(timerID);
        }
    }, []);

    return (
        <div>
            {date.toString}


        </div>
    )
}

export default ClockFC;


