import React, { Fragment } from 'react'
import { useDispatch } from 'react-redux'

const Activity = (props) => {
    const dispatch = useDispatch()

    const deleteActivity = () => {
        dispatch({
            type: "DELETE_ACTIVITY",
            payload: {
                id: props.id
            }
        })
};


    return (
        <Fragment>
            <div className="activity-wrapper">
                <p>activity: {props.name}, Duration: {props.duration}</p>
                <button onClick={deleteActivity} >Delete</button>
            </div>
        </Fragment>
    )
};

export default Activity