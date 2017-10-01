import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import PostsList from './components/PostsList';
import PostNew from './components/PostNew';
import PostShow from './components/PostShow';
import promise from 'redux-promise';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
    	<div>
    		<Switch>    		
    			<Route path='/posts/new' component={PostNew}/>
          <Route path='/posts/:id' component={PostShow}/>
    			<Route path='/' component={PostsList}/>
    		</Switch>
    	</div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
