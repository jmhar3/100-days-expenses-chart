import { BalanceHeader } from "./components/BalanceHeader";
import { BalanceFooter } from "./components/BalanceFooter";
import { Chart } from "./components/chart/Chart";
import { Footer } from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <div id="balance">
        <BalanceHeader />
        <div class="column" id="balance-body">
          <h3>Spending - Last 7 days</h3>
          <Chart />
          <hr/>
          <BalanceFooter />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
