import {combineReducers} from "redux";
function nub(nub=0,action) {
    switch (action.type) {
        case "INCREASE":
            return ++nub
        case "DECREASE":
            return --nub;
    }
    return nub;
}
function checked(checked=false,action) {
    switch (action.type) {
        case "CHANGE":
            checked = action.checked;
            return checked;
    }
    return checked;
}
let rootReducer = combineReducers({
    nub,
    checked
});
export default rootReducer;