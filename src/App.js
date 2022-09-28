import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//main
import Main from './routes/Main';
//sub
import AllGames from './routes/sub/AllGames'

import './App.css';




function App() {
  return (
      <>
        <BrowserRouter>
             <div className="App">
                 <Routes>
                     <Route exact path='/' component={Main} />
                     <Route
                         path="/game/all_games"
                         exact={true}
                         component={AllGames}
                     />
                 </Routes>
             </div>
        </BrowserRouter>
      </>
  );
}

export default App;
