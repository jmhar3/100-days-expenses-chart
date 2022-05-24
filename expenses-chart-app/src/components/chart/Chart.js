import { Data } from "./Data";

export const Chart = () => {
  const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

  return (
    <div id="chart" class="row">
      {daysOfWeek.map((day) => (
        <Data day={day} value="3" dataHeight="30" />
      ))}
    </div>
  );
};
