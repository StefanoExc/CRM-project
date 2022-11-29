import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MessageDisplay from "./components/MessageDisplay";
import Nav from './components/Nav'
import Dashboard from './pages/Dashboard'
import TicketPage from './pages/TicketPage'
import Log from './pages/Log'


const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/ticket' element={<TicketPage />} />
          <Route path='/ticket/:id' element={<TicketPage editMode={true} />} />
          <Route path='/log' element={<Log/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
