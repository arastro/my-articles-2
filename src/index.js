import React from 'react';
import ReactDOM from 'react-dom';
import {createStore,applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import reducers from './reducer/reducer.js';
import './index.css';
import Lista from './container/lista.js'

const enhancers = []

if (process.env.NODE_ENV === 'development') {
    const { devToolsExtension } = window;
  
    if (typeof devToolsExtension === 'function') {
      enhancers.push(devToolsExtension());
    }
  }

let store = createStore(reducers,compose(
    applyMiddleware(thunk),
    ...enhancers
    )
);

class App extends React.Component{

    render(){
        return(
            <Lista/>
        )
    }
}

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);

