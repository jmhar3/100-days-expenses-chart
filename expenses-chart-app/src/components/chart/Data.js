import { useState } from "react";

export const Data = ({ day, value, maxAmount }) => {
  const [isHover, setIsHover] = useState(false);

  const isToday = day === "tue";
  const backgroundColor = isToday ? "hsl(186, 34%, 60%)" : "hsl(10, 79%, 65%)";

  const height = Math.round((value / maxAmount) * 100.00)
  
  return (
    <div class="column">
      <div class="label" style={{ opacity: isHover ? 1 : 0 }}>
        <h5>${value}</h5>
      </div>
      <div
        class="data"
        style={{
          height: height + "px",
          backgroundColor: backgroundColor,
        }}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      ></div>
      <p>{day}</p>
    </div>
  );
};
