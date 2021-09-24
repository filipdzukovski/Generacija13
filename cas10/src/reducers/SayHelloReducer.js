const initialState = {
    greeting: "Poceten Greeting",
    bye:""
}

const SayHelloReducer = (state = initialState,action) => {

    switch(action.type){

        case "SAY_HELLO":
            return {
                ...state,
                greeting: action.payload
            }
        
        case "SAY_GOODBYE":
            return{
                ...state,
                bye:action.payload
            }

        default: return state;
    }

}

export default SayHelloReducer;