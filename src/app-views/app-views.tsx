import React , { Component } from 'react';
import { Route, Router } from "react-router-dom";
import TodayComponent from './today/today';
import TomorrowComponent from './tomorrow/tomorrow';
import FutureComponent from './future/future';

import history from '../helpers/history';

class AppViews extends Component{
    render(){
        {console.log(history)};
        return(
            <Router history={history}>
                    <Route exact path={`/today`} component={TodayComponent}></Route>
                    <Route path={`/tomoroow`} component={TomorrowComponent}></Route>
                    <Route  path={`/future`} component={FutureComponent}></Route>
            </Router>
        )
    }
}

export default AppViews;