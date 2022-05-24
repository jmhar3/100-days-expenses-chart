import logo from "../images/logo.svg";

export const BalanceHeader = () => {
  return (
    <div>
      <div class="column">
        <p>My balance</p>
        <h2>$921.48</h2>
      </div>
      <img src={logo} />
    </div>
  );
};
