import { combineReducers } from "redux";
import counter from "./counter";
import todos from "./todos"

// 루트 리듀서 작성(리듀서 합치기)
const rootReducer = combineReducers({
    counter,
    todos,
});

export default rootReducer