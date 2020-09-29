import React, { Fragment } from 'react'

const Activity = (props) => {
    return (
        <Fragment>
            <div className="activity-wrapper">
                <p>activity: {props.name}, Duration: {props.duration}</p>
                <button>Delete</button>
            </div>
        </Fragment>
    )
};

export default Activity