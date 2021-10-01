import React from 'react';
import { Users } from './users';
import { Switch, Route } from 'react-router-dom';
import { Nav } from './Nav';
import { Comments } from './comments';
import {CommentView} from './comments/CommentView';

export function App() {

  return (
    <div id="app">
      <Nav />
      <Switch>
        <Route path="/users" component={Users} />
        <Route path="/comments" component={Comments} />
        <Route path="/comment/:commentId" component={CommentView} />
      </Switch>
    </div>
  )
}