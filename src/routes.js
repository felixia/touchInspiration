import React from 'react';
import { Route, IndexRoute } from 'react-router';

//App Entry/Control
import App from './modules/app/components/App';

//Users
import AllUsers from './modules/users/components/AllUsers';
import User from './modules/users/components/User';


export default ( 
  <Route path="/" component={App}>
     <IndexRoute component={AllUsers}/>
   	 <Route path="/users" component={AllUsers}>
   	 <Route path="/users/:id" component={User} />

   	 </Route>

  </Route>
);
