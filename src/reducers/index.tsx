import { combineReducers } from "redux";
import counter from './counter';
import todos from './todos';

const rootReducer = combineReducers({
    counter,
    todos
})

export default rootReducer;

// ts
export type RootState = ReturnType<typeof rootReducer>;