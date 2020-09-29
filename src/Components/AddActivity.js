import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

const AddActivity = () => {
    const dispatch = useDispatch();
    const [data, setData] = useState([]);

    const handleChange = (e) => {
        e.persist()
        setData(prev => ({...prev, [e.target.name]: e.target.value}))
}

    const addActivity = () => {
        dispatch({
            type: "CREATE_ACTIVITY",
            payload: {
                name: data.name,
                duration: data.duration
            }
        })

}

    return (
        <div>
            <div>
                <p>Activity:</p>
                <input onChange={(e) => handleChange(e)} name="name" placeholder="activity name..."/>
            </div>
            <div>
                <p>Duration:</p>
                <input onChange={(e) => handleChange(e)} name="duration" placeholder="duration..."/>
            </div>

            <button onClick={addActivity} >add activity</button>
        </div>
    )
};

export default AddActivity