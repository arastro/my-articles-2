import axios from 'axios';

export default {
    loadArticles(){
        return (dispatch) =>{
            return axios.get("https://myarticles-ivan.herokuapp.com/api/v1/articles").then((response)=>{
                dispatch({type:"GET_ARTICLES", articles: response.data});
            })
        }
    }
} 