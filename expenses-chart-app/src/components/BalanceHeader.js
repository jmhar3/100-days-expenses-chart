import logo from "../images/logo.svg";

export const BalanceHeader = () => {
  return (
    <div id="balance-header" class="row">
      <div class="column">
        <p>My balance</p>
        <h3>$921.48</h3>
      </div>
      <img src={logo} />
    </div>
  );
};
