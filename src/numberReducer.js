
const numberReducer = (state, action) => {
    switch (action.type) {
        case 'increment': return state + action.val;
        case 'decrement': return state - action.val;
        case 'reset': return 0;
        default: throw new Error('Unexpected action');
    }
};

export default numberReducer;