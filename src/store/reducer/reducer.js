import ActionTypes from '../constant/constant';

const INITIAL_STATE = {
    gamesResult: []
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ActionTypes.GET_GAMES:
            return ({
               ...state,  gamesResult: action.payload
            })
            default:
            return state;
    }

}