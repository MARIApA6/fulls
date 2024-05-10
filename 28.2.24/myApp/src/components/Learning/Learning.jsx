import React from 'react'
import Clock from './Learning';
import ClockFC from './ClockFC';
import PersonalDetails from './PersonalDetails';
import PersonalDetailsProps from './PersonalDetailsProps';
import PersonalDetailsPropsObjects from './PersonalDetailsPropsObjects';

const Learning = () => {
    return (
        <div>
            <h3>Learning</h3>

            <h4>Clock</h4>
            <Clock date={new Date()} name='Maria' phone='054' />

            <h4>Personal Details - props</h4>
            <PersonalDetails />
            <PersonalDetailsProps name="Maria pechen" />

            {/* <PersonalDetailsPropsObjects person={{ name: 'maria', phone: '054', email: 'maria@gmail.com' }} />
            <ClockFC date={new Date()} />  */}

        </div>
    )
}

export default Learning;