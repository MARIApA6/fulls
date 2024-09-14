import React from 'react';
import './PersonalDetailsProps.css';


const PersonalDetailsProps = (props) => {
    return (
        <div className="personal_details_props">
            <h4>PersonalDetailsPropss</h4>
            <div>
                {props.name}
            </div>
        </div >
    )
}

export default PersonalDetailsProps;
