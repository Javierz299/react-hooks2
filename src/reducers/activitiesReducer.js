import {v4 as uuid } from "uuid"
const initialState = [
    {
        id: 1,
        name: "gym",
        duration: "2 hours"
    }
];

const activitiesReducer = (state = initialState, action) => {
    
    switch(action.type){
        case "CREATE_ACTIVITY":
            return [...state, {
                id: uuid(),
                name: action.payload.name,
                duration: action.payload.duration,
            }]
        default:
            return state;
    }    
};

export default activitiesReducer;
