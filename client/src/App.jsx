import { Provider } from "react-redux";
import React, { useEffect } from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

// Layouts
import Navbar from './Components/Layouts/Navbar';
import Footer from './Components/Layouts/Footer';

// Public Routes
import Landing from './Components/Public/Landing';

// Auth Routes
import Login from './Components/Accounts/Login';
import Register from './Components/Accounts/Register';

// Protected Routes
import PrivateRoute from './Components/Protected/PrivateRoutes';
import Dashboard from './Components/Protected/Dashboard/Dashboard';


// Auth Actions
import { loadUser } from './store/Auth/Action';
import store from './store';

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return <>
    <Router>
      <Provider store={store}>
        <>
          <Navbar />
          <div className="container main-container">
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
            </Switch>
          </div>
          <Footer />
        </>
      </Provider>
    </Router>
  </>;
}

export default App;