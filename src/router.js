import React from 'react';
import { Router, Route } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Products_routes from './routes/Products_routes';
import Products from './routes/Products';




function RouterConfig({ history }) {
	// <Route path="/" component={IndexPage} />
  return (
    <Router history={history}>
     	
		
		<Route path="/" component={Products_routes} />


    </Router>
  );
}

export default RouterConfig;
