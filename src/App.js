import {BrowserRouter, Route} from "react-router-dom";
import { Helmet } from 'react-helmet-async';
//common
import Header from "./component/common/Header";
import Footer from "./component/common/Footer";
//main
import Main from './component/main/Main';
//sub
import AllGames from './component/sub/AllGames'

import './App.css';
import React from "react";
import SEOMetaTag from "./routes/SEOMetaTag";



function App() {
  return (
      <>
        <SEOMetaTag/>
        <div className="App">
            <BrowserRouter>
                <Route exact path='/' component={Main} />
                <Route
                    path="/game/all_games"
                    exact={true}
                    component={AllGames}
                />
            </BrowserRouter>
        </div>
      </>
  );
}

export default App;
