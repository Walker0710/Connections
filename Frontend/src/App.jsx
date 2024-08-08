import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import GamePage from './pages/GamePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import { AuthProvider } from './context/AuthContext';
import { GameProvider } from './context/GameContext';
import './styles/App.css';

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <GameProvider>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/game" component={GamePage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/signup" component={SignupPage} />
          </Switch>
        </GameProvider>
      </AuthProvider>
    </Router>
  );
};

export default App;
