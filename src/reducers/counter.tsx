// counter라는 reducer 만들기

// ts type
interface Action {
    type: string;
}

const counter = (state= 0, action: Action) => {
    switch (action.type) { // switch(비교할 값)
        case "INCREMENT":
            return state + 1;
        case "DECREMENT":
            return state - 1;
        default:
            return state;
    }
}

export default counter;