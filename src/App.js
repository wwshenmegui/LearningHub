import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './store'

import Home from './Home.js'
import LoginPage from './containers/Login/LoginPage.js'
import RegisterPage from './containers/Register/RegisterPage.js'
import CreateLearningPath from './containers/LearningPath/CreateLearningPath.js';
import Assignment from './containers/Assignment/Assignment';
import ProfilePage from './containers/Profile/ProfilePage';
import ShowCaseListPage from './containers/ShowCase/ShowCaseListPage'
import PartListPage from "./containers/Participation/PartListPage";
import PartItemPage from "./containers/Participation/PartItemPage";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Route exact path="/" component={Home} />
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/create" component={CreateLearningPath} />
          <Route path="/assignment" component={Assignment} />
          <Route path="/users/:userId" component={ProfilePage} />
          <Route path="/showcases/:userId" component={ShowCaseListPage} />
          <Route path="/participations/userId/:userId" component={PartListPage} />
          <Route path="/participations/participationId/:participationId" component={PartItemPage} />
          {/* <CreateLearningPath /> */}
          {/* <Assignment /> */}
        </div>
      </Router>
    </Provider>
  );
}

export default App;
