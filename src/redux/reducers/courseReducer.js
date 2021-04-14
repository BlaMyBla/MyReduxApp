export default function courseReducer(state = [], action) {

    switch (action.type) {
        case "CREATE_COURSE":
            debugger;
            //state.push(action.course) this is wrong -> mutates state
            return[...state, {...action.course}];            
        default:
            return state;
    }
}