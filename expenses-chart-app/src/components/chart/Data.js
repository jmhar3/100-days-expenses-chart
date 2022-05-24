import { useState } from "react";

export const Data = ({ day, value, dataHeight }) => {
  const isToday = day === "tue";
  const [isHover, setIsHover] = useState(false);
  const backgroundColor = isToday ? "hsl(186, 34%, 60%)" : "hsl(10, 79%, 65%)";

  return (
    <div class="column">
      <div class="label" style={{ opacity: isHover ? 1 : 0 }}>
        <h5>{value}</h5>
      </div>
      <div
        class="data"
        style={{
          height: dataHeight + "px",
          backgroundColor: backgroundColor,
        }}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      ></div>
      <p>{day}</p>
    </div>
  );
};
