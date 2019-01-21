import React from "react";

class Inbox extends React.Component<{}, {}> {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2>Inbox</h2>
        <ul>
          <li>
            <h3>Subject: Data bill due in 30 days</h3>
            <p>Thank you for signing up with OBIP. We've hooked you up to the data grid and started metering your usage. Just remember to pay your account once a month or you'll incur a fee. If your account exceeds -100 Points, or you go more than 3 gordo-ticks without payment, you power will be cut off! You can pay your bill through the "bank" program.</p>
          </li>
        </ul>
        <ul>
          <li>
            <h3>Subject: Electricty bill due in 30 days</h3>
            <p>Thank you for signing up with EleCo Utilities. We've hooked you up to the electrical grid and started metering your usage. Just remember to pay your account once a month or you'll incur a fee. If your account exceeds -100 Points, or you go more than 3 gordo-ticks without payment, you power will be cut off! You can pay your bill through the "bank" program.</p>
          </li>
        </ul>
      </div>
    );
  }
}
export default <Inbox />;
