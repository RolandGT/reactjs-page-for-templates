import React from 'react';
import Templates from './components/Templates';
import './grid/css/bootstrap-grid.min.css';
import './grid/css/style.css';

function App() {
  return (
    <div className="App">
      <div id="grid-menu"><div id="grid-nav"></div></div>
      <Templates/>
    </div>
  );
}

export default App;
