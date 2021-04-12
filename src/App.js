import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="App">
      <Header />
      {/* App body */}
      <div className="app_Body">
        <Sidebar />
      </div>
      
        {/* Side bar */}
        {/* Feed */}
        {/* Widgets */}
    </div>
  );
}

export default App;
