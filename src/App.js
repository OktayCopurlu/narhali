import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import MenuLink from "./moduls/Navigation/MenuLink";
import Home from "./moduls/Home/Home";
import HaliList from "./moduls/Halilar/HaliList"
import PerdeList from "./moduls/Perdeler/PerdeList";
import YatakList from "./moduls/Yataklar/YatakList";
import KaymazList from "./moduls/Kaymazlar/KaymazList";
import Footer from "./moduls/Footer/Footer";
import Email from "./moduls/Footer/Email";
import Hakkimizda from "./moduls/Footer/Hakkimizda";
import Narlidere from "./moduls/Footer/Magazalarimiz/Narlidere";
import Buca from "./moduls/Footer/Magazalarimiz/Buca"
function App() {
  return (
    <Router>
      <MenuLink />
      <Switch>
        <Home exact path="/"/> 
        <HaliList path="/hali-list"/>
        <PerdeList path="/perde-list"/>
        <YatakList path="/yatak-list"/>
        <KaymazList path="/kaymaz-list"/>
        <Email path="/email"/>
        <Hakkimizda path="/hakkimizda"/>
        <Narlidere path="/narlidere-subesi"/>
        <Buca path="/buca-subesi"/>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
