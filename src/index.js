import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import manageTasks from './reducers/manageTodo.js'

let store = createStore(manageTasks);

ReactDOM.render(
    <Provider store={store}>
        <App store={store}/>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
