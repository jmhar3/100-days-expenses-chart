import { Data } from "./Data";
import { useMemo } from "react";

export const Chart = (data) => {
  const dataAmounts = data.data.map((dataItem) => dataItem.amount);

  const maxAmount = useMemo(() => {
    Math.max(...dataAmounts);
  }, [dataAmounts]);

  return (
    <div id="chart" class="row">
      {data.data.map((dataItem) => (
        <Data
          day={dataItem.day}
          value={dataItem.amount}
          maxAmount={maxAmount}
        />
      ))}
    </div>
  );
};
