let initialState={
    articles:[]
}

const mainReducer=(state =initialState, action)=>{
    console.log(action)
    switch(action.type){
        case "GET_ARTICLES":
        return { 
            ...state, articles: action.articles
            }
        default:
            return state
    }
}

export default mainReducer;
