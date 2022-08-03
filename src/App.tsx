import * as React from "react";
import { NavBar, TotalSpo } from "./components";
import "./App.css";
import OverviewNav from "./components/navbar/OverviewNav";
import ProductList from "./components/productList/ProductList";


function App() {
  return (
    <div className="App">
      <OverviewNav />
      <NavBar />
      <TotalSpo />
      <ProductList />
    </div>
  );
}

export default App;
