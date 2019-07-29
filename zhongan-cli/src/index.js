import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {HashRouter} from "react-router-dom";
import {Provider} from 'react-redux';
import store from './store'

import axios from 'axios'
// 配置基础路径
axios.defaults.baseURL = 'http://localhost:2019';



ReactDOM.render(
    <Provider store={store}>
       <HashRouter>
            <App/>
       </HashRouter> 
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
