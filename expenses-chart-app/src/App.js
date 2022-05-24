import { BalanceHeader } from "./components/BalanceHeader";
import { BalanceFooter } from "./components/BalanceFooter";
import { Chart } from "./components/chart/Chart";
import { Footer } from "./components/Footer";
import "./App.css";
import data from "./data.json"

function App() {
  return (
    <>
      <div id="balance">
        <BalanceHeader />
        <div class="column" id="balance-body">
          <h3>Spending - Last 7 days</h3>
          <Chart data={data}/>
          <hr/>
          <BalanceFooter />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
