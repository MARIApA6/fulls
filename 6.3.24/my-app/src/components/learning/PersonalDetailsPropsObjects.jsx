import React from 'react'

const PersonalDetailsPropsObjects = (props) => {
    return (
        <div className="">
            <h4>Personal Details - Props Object</h4>
            <div>
                <div>{props.person.name}</div>
                <div>{props.person.phone}</div>
                <div>{props.person.email}</div>
            </div>
        </div>
    )
}

export default PersonalDetailsPropsObjects;