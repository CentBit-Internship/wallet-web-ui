import * as React from "react";
import { NavBar, TotalSpo, SideBar, Cards } from "./components";
import "./App.css";
import OverviewNav from "./components/navbar/OverviewNav";
import ProductList from "./components/productList/ProductList";
import { Earnings } from "./components/earnings/Earnings";

function App() {
  return (
    <div className="App">
      <OverviewNav />
      <NavBar />
      <TotalSpo />
      <ProductList />

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
            <div className="earnings visible">{<Earnings />}</div>
            <div className="customers-visibility visible">
              Customers visibility
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
