// todos라는 reducer 만들기

// ts type
enum ActionType {
    ADD_TODO = "ADD_TODO",
    DELETE_TODO = "DELETE_TODO"
}

interface Action {
    type: ActionType;
    text: string;
}
//

const todos = (state= [], action: Action) => {
    switch (action.type) { // switch(비교할 값)
        // action은 type, payload로 이루어진 객체
        case "ADD_TODO": // action.type
            return [...state, action.text] // action.text = action.payload
        default:
            return state;
    }
}

export default todos;