import React from 'react';
import { SideBar, Cards } from './components';
import './App.css';

function App() {
  return (
    <div className="App">
      <SideBar />
      <div className="aside">
        <div className="header visible">Header</div>
        <div className="main visible">
          <div className="left visible">
            <Cards />
            <div className="sales-analytics visible">Sales Analytics</div>
            <div className="top-selling visible">Top Selling Products</div>
          </div>
          <div className="right visible">
            <div className="earnings visible">Earnings</div>
            <div className="customers-activity visible">Customers visibility</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
