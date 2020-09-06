import React from 'react';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import './App.css';
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import PostDetail from './Components/PostDetail/PostDetail';

function App() {
  return (
    <div >
      <Router>
        <Switch>
        <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path = '/post/:postId'>
            <PostDetail></PostDetail>
          </Route>

          <Route exact path = '/'>
            <Home></Home>
          </Route>
          <Route path='*'>
            <NotFound/>
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
