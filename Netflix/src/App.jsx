import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NetflixPage from "./pages/NetflixPage/NetflixPage";
import SignIn from "./pages/SignIn/SignIn";
import Error from "./pages/ErrorPage/ErrorPage";

export default function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<NetflixPage />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="*" element={<Error/>}/>
        </Routes>
      </div>
    </Router>
  );
}
