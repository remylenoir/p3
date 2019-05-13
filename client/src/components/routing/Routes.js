import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Register from '../auth/Register';
import Login from '../auth/Login';
import Dashboard from '../dashboard/Dashboard';
import PrivateRoute from './PrivateRoute';
import AlertDetails from '../alerts/AlertDetails';
import EventDetails from '../events/EventDetails';
import Profile from '../user/Profile';
import EditProfile from '../user/EditProfile';
import AlertList from '../alerts/AlertList';
import EventList from '../events/EventList';

const Routes = () => {
  return (
    <Fragment>
      <Switch>
        <Route exact path='/register' component={Register} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/alert/all' component={AlertList} />
        <Route exact path='/alert/:alertId' component={AlertDetails} />
        <Route exact path='/event/all' component={EventList} />
        <Route exact path='/event/:eventId' component={EventDetails} />
        <PrivateRoute exact path='/dashboard' component={Dashboard} />
        <PrivateRoute exact path='/profile' component={Profile} />
        <PrivateRoute exact path='/profile/edit' component={EditProfile} />
      </Switch>
    </Fragment>
  );
};

export default Routes;
