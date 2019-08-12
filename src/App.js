import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./custom.css";

// Uncomment if adding redux
// import { Provider } from "react-redux";
// import { createStore, applyMiddleware } from "redux";
// import rootReducer from "../reducers";
// import thunk from "redux-thunk";

// Layout Components
import Header from "./components/Header";
import ScrollToTop from "./components/ScrollToTop";

// Pages
import Dashboard from "./pages/Dashboard";
import Homepage from "./pages/Homepage";
import LocationManagement from "./pages/LocationManagement";
import ItemDetails from "./pages/ItemDetails";
import EditItemDetails from "./pages/EditItemDetails";

// Uncomment if adding redux
// const store = createStore(rootReducer, applyMiddleware(thunk));

class App extends React.Component {
  render() {
    return (
      <Router onUpdate={() => window.scrollTo(0, 0)}>
        <ScrollToTop>
          <Header />
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/menu-management" component={Dashboard} />
            <Route exact path="/location-management" component={LocationManagement} />
            <Route exact path="/itemdetails/" component={ItemDetails} />
            <Route exact path="/itemdetails/:id" component={ItemDetails} />
            <Route exact path="/edit/itemdetails/" component={EditItemDetails} />
            <Route exact path="/edit/itemdetails/:id" component={EditItemDetails} />
          </Switch>
        </ScrollToTop>
      </Router>
    );
  }
}

export default App;
