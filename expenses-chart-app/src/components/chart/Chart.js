import { Data } from "./Data";

export const Chart = () => {
  const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

  return (
    <div id="chart">
      {daysOfWeek.map((day) => (
        <Data day={day} value="3" />
      ))}
    </div>
  );
};
