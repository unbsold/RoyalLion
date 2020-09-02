import React from 'react';
import {Route, Switch} from "react-router-dom";

import Line from './page/line/line';
import Live from './page/live/live';

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
