import React, {createContext, useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from "./Navbar/NavigationBar";
import {Routes, Route, BrowserRouter, Navigate} from 'react-router-dom';
import BasicDetails from "./BasicDetails/BasicDetails";
import FeatsTraits from "./Feats-Traits/FeatsTraits";
import Spells from "./Spells/Spells";
import Config from "./Config/Config";
import {StatsArray} from "./StatsArray";

function App() {
  const [standardArray, setStatsArray] = useState<StatsArray>({
    str: 0,
    dex: 0,
    con: 0,
    wis: 0,
    int: 0,
    cha: 0,
  });

  return (
    <BrowserRouter>
      <NavigationBar/>
      <div className="px-5">
        <Routes>
          <Route index path={"/basic-details"} element={<BasicDetails/>}/>
          <Route path={"/feats-traits"} element={<FeatsTraits/>}/>
          <Route path={"/spells"} element={<Spells/>}/>
          <Route path={"/config"} element={<Config StandardArray={standardArray} setStatsArray={setStatsArray} />}/>
          <Route path="/" element={ <Navigate to="/basic-details" /> } />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
