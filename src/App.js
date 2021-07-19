import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MenuLink from "./moduls/Navigation/MenuLink";
import Home from "./moduls/Home/Home";
import HaliList from "./moduls/Halilar/HaliList";
import PerdeList from "./moduls/Perdeler/PerdeList";
import YatakList from "./moduls/Yataklar/YatakList";
import KaymazList from "./moduls/Kaymazlar/KaymazList";
import Footer from "./moduls/Footer/Footer";
import Email from "./moduls/Footer/Email";
import Hakkimizda from "./moduls/Footer/Hakkimizda";
import Narlidere from "./moduls/Footer/Magazalarimiz/Narlidere";
import Buca from "./moduls/Footer/Magazalarimiz/Buca";
import CreateForm from "./moduls/CreateForm";
function App() {
  return (
    <Router>
      <MenuLink />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/hali-list">
          <HaliList />
        </Route>
        <Route path="/perde-list">
          <PerdeList />
        </Route>
        <Route path="/yatak-list">
          <YatakList />
        </Route>
        <Route path="/kaymaz-list">
          <KaymazList />
        </Route>
        <Route path="/email">
          <Email />
        </Route>
        <Route path="/hakkimizda">
          <Hakkimizda />
        </Route>
        <Route path="/narlidere-subesi">
          <Narlidere />
        </Route>
        <Route path="/buca-subesi">
          <Buca />
         
        </Route> <Route path="/create-form">
          <CreateForm />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
