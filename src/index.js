import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import decode from 'jwt-decode';
import { composeWithDevTools } from 'redux-devtools-extension';
import './include/bootstrap'
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import rootReducer from './rootReducer';
import { userLoggedIn } from './actions/authActions';
import setAuthorizationHeader from './utils/setAuthorizationHeader';

const store = createStore (
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

if(localStorage.shopJWT) {
    const payload = decode(localStorage.shopJWT);
    const user = {
        token: localStorage.shopJWT,
        email: payload.email,
        firstName: payload.firstName,
        confirmed: payload.confirmed,
        roles: payload.roles
    };
    setAuthorizationHeader(localStorage.shopJWT);
    store.dispatch(userLoggedIn(user));
}

ReactDOM.render(
    <BrowserRouter>
      <Provider store={store}>
        <Route component={App} />
      </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);
registerServiceWorker();
