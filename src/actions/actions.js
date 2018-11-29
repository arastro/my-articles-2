import axios from 'axios';

export function loadArticles(){
    return (dispatch) =>{
        return axios.get("https://myarticles-ivan.herokuapp.com/api/v1/articles").then((response)=>{
            console.log(response);  
            dispatch({type:"GET_ARTICLES", articles: response.data});
        })
    }
}