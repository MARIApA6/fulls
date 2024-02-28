import React from 'react'

export const Lernning = () => {
    return (
        <div>
            <h3>Lernning</h3>

            <h4>Clock</h4>
            <Clock date={newDate()} name='Maria' phone='054' ></Clock>

            <h4>Personal Details</h4>
            <PersonalDetails />
        </div>


    )
}

export default Lernning;