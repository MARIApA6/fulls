import React, { useState, useEffect } from 'react';

const PersonalDetailsPropsFC = (props) => {
    const [name, setName] = useState(props.name);
    useEffect(() => {

    }
    )

    return (
        <div>
            {name.toString}
        </div>
    )
}
export default PersonalDetailsPropsFC;