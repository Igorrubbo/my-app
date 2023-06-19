import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import Login from './Login.js';
import ImagesPage from './ImagesPage.js';

const App = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  // Function to handle successful login
  const handleLogin = () => {
    setLoggedIn(true);
  };

  return (
    <Router>
      <Routes>
        <Route exact path="/">
          {isLoggedIn ? <Navigate to="/images" /> : <Login onLogin={handleLogin} />}
        </Route>
        <Route path="/images">
          {isLoggedIn ? <ImagesPage /> : <Navigate to="/" />}
        </Route>
      </Routes>
    </Router>
  );
};

export default App;

