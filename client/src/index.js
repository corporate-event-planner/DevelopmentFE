import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "react-redux-notify/dist/ReactReduxNotify.css";
import "semantic-ui-css/semantic.min.css";
import Login from "./components/LoginComponent";
import rootReducer from "./reducers";
import logger from "redux-logger";
import thunk from "redux-thunk";
import CalendarEvents from "./components/CalendarComponent";
import Home from './components/HomeComponent/Home';
import EventsList from './components/EventComponent/EventsList';
import EventPage from './components/EventComponent/EventPage';


const store = createStore(rootReducer, applyMiddleware(thunk, logger));

function App() {
  return <Login />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route exact path="/" component={App} />
      <Route path="/calendar" component={CalendarEvents} />
      <Route exact path='/home' component={Home} />
      <Route exact path="/events" component={EventsList} />
      <Route exact path='/events/{id}' component={EventPage} />
      <Route exact path="/createevent" component={App} />
    </Router>
  </Provider>,
  rootElement
);