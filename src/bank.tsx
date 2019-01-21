import React from "react";

class Inbox extends React.Component<{}, {}> {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2>Bank</h2>
        <h3>Holdings</h3>
        <p>You have 1 Point</p>
        <p>You have no other capital</p>
        <h3>Bills</h3>
        <ul>
          <li>
            <h3>OBIP</h3>
            <p>balance: -40 point</p>
            <p>last payment made: 122 gordo-ticks</p>
            <p>You need to pay 23 points for 156 uber-bips within 3.2 gordo-ticks or you will incur a fee!</p>
            <a href="#">pay</a>
          </li>
        </ul>
        <ul>
          <li>
            <h3>EleCo</h3>
            <p>balance: -500 point</p>
            <p>last payment made: 122 gordo-ticks</p>
            <p>You need to pay 453 points for 15 zaps within 3 ticks or your tiks will shut off!</p>
            <a href="#">pay</a>
          </li>
        </ul>
      </div>
    );
  }
}
export default <Inbox />;
