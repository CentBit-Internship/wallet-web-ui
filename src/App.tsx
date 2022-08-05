import { SideBar, Cards, SalesAnalytics, CustomersActivity, ActivityWidget } from './components';
import './App.css';
import { Earnings } from './components/earnings/Earnings';

function App() {
  return (
    <div className="App">
      {/* <NavBar />
      <TotalSpo /> */}
      
      <SideBar />
      <div className="aside">
        <div className="header visible">Header</div>
        <div className="main visible">
          <div className="left visible">
            <Cards />
            <div className="sales-analytics visible"><SalesAnalytics /></div>
            <div className="top-selling visible">Top Selling Products</div>
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
