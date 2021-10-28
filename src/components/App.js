import React, { useState, useEffect } from 'react';
import { connect, useDispatch, useSelector } from "react-redux";
import { Route, useHistory, Switch, Redirect } from 'react-router-dom';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import Preview from './Preview';
import Error404 from './Error404';

function App() {
  
  const history = useHistory()

  function goForm() {
    history.push('/');
  }

  function goPreview() {
    history.push('/preview');
  }

  return (
    <div className="page">
      <div className="page__container">
          <Header goForm={goForm} goPreview={goPreview}/>
          <Switch >
          <Route exact path="/preview">
              <Preview/>
            </Route>
            <Route exact path="/">
              <Main/>
            </Route>
            <Route path="/*" >
              <Error404 />
            </Route>
            {/* <Route>
              {loggedIn ? <Redirect to="/" /> : <Redirect to="/signin" />}
            </Route> */}
          </Switch>
          <Footer />
      </div>
    </div>
  );
}

export default App;