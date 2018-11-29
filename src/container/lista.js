import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/actions.js'
import Contenedor from '../component/index.js';

class Lista extends React.Component{

    render(){
        return(
            <Contenedor
            handleClick={this.props.loadArticles} 
            articles={this.props.articles}></Contenedor>
        )
    }
}

const mapStateToProps = (state)=>{
    return state
};

export default connect (mapStateToProps,actions)(Lista);