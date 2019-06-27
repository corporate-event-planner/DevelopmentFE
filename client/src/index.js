import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "react-redux-notify/dist/ReactReduxNotify.css";
import "semantic-ui-css/semantic.min.css";
import Login from "./components/LoginComponent";
import rootReducer from "./reducers";
import logger from "redux-logger";
import thunk from "redux-thunk";
import CalendarEvents from "./components/CalendarComponent";
import Home from "./components/HomeComponent/Home";
import EventsList from "./components/EventComponent/EventsList";
import EventsForm from "./components/FormComponent";
import EventPage from './components/EventComponent/EventPage';
import PrivateRoute from "./components/PrivateRoute"
const store = createStore(rootReducer, applyMiddleware(thunk, logger));

function App() {
  return <Login />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <PrivateRoute exact path="/" component={Home} />
      <PrivateRoute path="/calendar" component={CalendarEvents} />
      <PrivateRoute exact path="/events" component={EventsList} />
      <PrivateRoute path="/createevent" component={Home} />
      <PrivateRoute path="/form" component={EventsForm} />
      <Route path="/login" component={Login} />
      <Route path="/events/:eventid" component={EventPage}/>
    </Router>
  </Provider>,
  rootElement
);
