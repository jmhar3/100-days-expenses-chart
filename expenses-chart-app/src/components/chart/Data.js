export const Data = ({day, value}) => {
  return (
    <div class="column data">
      <div>
        <h5>{value}</h5>
      </div>
      <div></div>
      <p>{day}</p>
    </div>
  );
};
