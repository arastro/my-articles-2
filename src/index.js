import React from 'react';
import ReactDOM from 'react-dom';
import {createStore,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import reducers from './reducer/reducer.js';
import './index.css';
import Lista from './container/lista.js'

let store = createStore(reducers,applyMiddleware(thunk));

class App extends React.Component{

    render(){
        return(
            <Lista></Lista>
        )
    }
}

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);

