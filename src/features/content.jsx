import React from 'react';
import {Route, Switch} from "react-router-dom";

import {Line} from './line';
import {Live} from './live';

const Content = () => {
  return(
    <div>
        <Switch>
          <Route exact path="/" component={Line} />
          <Route path="/Live" component={Live} />
        </Switch>
    </div>
  )
}

export default Content;
