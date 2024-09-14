import React from 'react'
import ClockTZ from './ClockTZ'

// להציב פה משתנה של פרופס שהגדרנו בclockTz
// בשורות
const ThreeClocks = () => {
    return (
        <div>
            <ClockTZ name='Tel Aviv' />
            <ClockTZ name='New York' timeZone='America/New York' />
            <ClockTZ name='London' timeZone='Europe/London' />

        </div>
    )
}

export default ThreeClocks


