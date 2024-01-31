import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from './Component/Home.js';
import ShowSummary from './Component/ShowSummary.js';
import BookTicket from './Component/BookTicket.js';



function App() {
    return (
      <Routes>
         <Route path="/" element={<Home />} />
          <Route path="/show/:id" element={<ShowSummary />} />
          <Route path="/book/:id" element={<BookTicket />} />

        </Routes>
  );
}

export default App;