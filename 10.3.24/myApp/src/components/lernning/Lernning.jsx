import React from 'react'
import ClockFC from './ClockFC';
import PersonalDetails from './PersonalDetails';

export const Lernning = () => {
    return (
        <div>
            <h3>Lernning</h3>

            <h4>Clock</h4>
            <Clock date={newDate()} name='Maria' phone='054' ></Clock>

            <h4>Personal Details</h4>
            <PersonalDetails />
            <PersonalDetailsProps name="Maria pechen" />
            <PersonalDetailsPropsObjects person={{ name: 'maria', phone: '054', email: 'maria@gmail.com' }} />
            <ClockFC date={new Date()} />
        </div>


    )
}

export default Lernning;