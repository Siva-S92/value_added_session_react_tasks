import React from "react";
import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TransferElements from "./pages/TransferElements";
import NestedList from "./pages/NestedList";
import InfiniteScrollPage from "./pages/InfiniteScrollPage";
import HitTheBoxGame from "./pages/HitTheBoxGame";
import BoxClick from "./pages/BoxClick";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/problem1" element={<TransferElements />} />
          <Route path="/problem2" element={<NestedList />} />
          <Route path="/problem3" element={<InfiniteScrollPage />} />
          <Route path="/problem4" element={<HitTheBoxGame />} />
          <Route path="/problem5" element={<BoxClick />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
