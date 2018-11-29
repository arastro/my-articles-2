let initialState={
    articles:[]
}

const mainReducer=(state =initialState, action)=>{

    switch(action.type){
        case "GET_ARTICLES":
        return { 
            ...state, acticles: action.articles
            }
        default:
            return state
    }
}

export default mainReducer;
