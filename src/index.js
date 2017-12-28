import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';

import PostIndex from './containers/post_index';
import PostNew from './containers/post_new';

import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>   
        <Switch>
          <Route path="/posts/new" component={PostNew}/>
          <Route path="/" component={PostIndex}/>
        </Switch>  
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
