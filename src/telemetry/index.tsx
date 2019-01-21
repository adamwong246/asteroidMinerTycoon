import React from "react";

class Telemtry extends React.Component<{}, {}> {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2>Telemtry</h2>
        <h3>IO Devices</h3>

        <ul>
          <li>Modem 1 bip/tik</li>
        </ul>

        <h3>sensors</h3>

        <ul>
          <li>Power monitor 1 zap/tick</li>
        </ul>
      </div>

    );
  }
}
// export default Awsim;
export default <Telemtry />;
