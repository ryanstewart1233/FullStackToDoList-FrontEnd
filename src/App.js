import React from "react";
import { Router, Route, Switch } from "react-router-dom";

import history from "./history";

import LandingPage from "./pages/LandingPage";

import MainPage from "./pages/MainPage";

import DeleteListModal from "./components/modal-components/DeleteListModal";
import CreateNewListModal from "./components/modal-components/CreateNewListModal";
import EditListModal from "./components/modal-components/EditListModal";

function App() {
  return (
    <div className="app">
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/main" component={MainPage} />
        </Switch>
        {/* if the modal is outside the switch then it can show up ontop of the rest
        of the app. */}
        <Route path="/main/delete/:list_id" exact component={DeleteListModal} />
        <Route path="/main/create-list" exact component={CreateNewListModal} />
        <Route path="/main/edit/:list_id" exact component={EditListModal} />
      </Router>
    </div>
  );
}

export default App;
