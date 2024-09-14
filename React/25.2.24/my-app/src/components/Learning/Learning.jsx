import React from 'react'
import Clock from './Clock';
import PersonalDetails from './PersonalDetails';

export const Learning = () => {
    return (
        <div>
            <h3>Learning</h3>

            <h4>Clock</h4>
            <Clock date={new Date()} name='Maria' phone='054' ></Clock>

            <h4>Personal Details</h4>
            <PersonalDetails />
        </div>


    )
}

export default Learning;