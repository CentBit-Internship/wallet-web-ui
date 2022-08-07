import { SideBar, Cards, SalesAnalytics, CustomersActivity, ActivityWidget } from './components';
import './App.css';
import { Earnings } from './components/earnings/Earnings';
import OverviewNav from './components/navbar/OverviewNav';
import ProductList from './components/productList/ProductList';

function App() {
  return (
    <div className="App">

      <SideBar />
      <div className="aside">
        <div className="header visible">
          <OverviewNav/>
        </div>
        <div className="main visible">
          <div className="left visible">
            <Cards />
            <div className="sales-analytics visible"><SalesAnalytics /></div>
            <div className="top-selling visible"><ProductList/></div>
          </div>
          <div className="right visible">
            <div className="earnings visible">
              {<Earnings />}
            </div>
            <div className="customers-visibility visible">
              <CustomersActivity >
                <ActivityWidget />
              </CustomersActivity>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
