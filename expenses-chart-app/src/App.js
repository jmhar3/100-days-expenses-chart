import { BalanceHeader } from "./components/BalanceHeader";
import { BalanceFooter } from "./components/BalanceFooter";
import { Chart } from "./components/chart/Chart";
import { Footer } from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <BalanceHeader />
      <div class="column">
        <h2>Spending - Last 7 days</h2>
        <Chart />
        <BalanceFooter />
      </div>
      <Footer />
    </>
  );
}

export default App;
