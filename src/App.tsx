import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavigationBar from './Navbar/NavigationBar';
import BasicDetails from './BasicDetails/BasicDetails';
import FeatsTraits from './Feats-Traits/FeatsTraits';
import Spells from './Spells/Spells';
import Config from './Config/Config';
import { AppContextProvider } from './GlobalContext';

function App() {
  return (
    <BrowserRouter>
      <AppContextProvider>
        <NavigationBar />
        <div className="p-3">
          <Routes>
            <Route index path="/basic-details" element={<BasicDetails />} />
            <Route path="/feats-traits" element={<FeatsTraits />} />
            <Route path="/spells" element={<Spells />} />
            <Route path="/config" element={<Config />} />
            <Route path="/" element={<Navigate to="/basic-details" />} />
          </Routes>
        </div>
      </AppContextProvider>
    </BrowserRouter>
  );
}

export default App;
