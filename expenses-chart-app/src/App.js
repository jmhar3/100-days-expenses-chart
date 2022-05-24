import { BalanceHeader } from "./components/BalanceHeader";
import { Footer } from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <BalanceHeader />
      <div>
        <h2>Spending - Last 7 days</h2>
        <chart />
      </div>
      mon tue wed thu fri sat sun Total this month $478.33 +2.4% from last month
      <Footer />
    </>
  );
}

export default App;
