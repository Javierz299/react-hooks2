import React, { Fragment, useState }  from 'react'
import Activity from './Activity'
import { useSelector } from 'react-redux'
import AddActivity from './AddActivity';

const Workouts = () => {
    const allActivities = useSelector((state) => {
        console.log('state',state)
        return state.activities;
    });

    const [add, setAdd ] = useState(false);
  
        return (
            <Fragment>
                <div className="workouts-wrapper">
                <h2>My workouts</h2>
                <button onClick={() => setAdd(!add)} >Add Activity</button>
                {add && <AddActivity />}

                {allActivities.map(activity => {
                    return <Activity key={activity.id} id={activity.id} name={activity.name} duration={activity.duration} />
                })
                }
                </div>
            </Fragment>
        )

}

export default Workouts
