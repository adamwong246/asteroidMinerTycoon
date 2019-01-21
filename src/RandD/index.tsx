
import React from 'react';
import { render } from 'react-dom';

class Rd extends React.Component<{}, {
  code: string;
}> {

  constructor(props) {
    super(props);
    this.state = {
      code: '// type your code...',
    }
  }
  editorDidMount(editor, monaco) {
    console.log('editorDidMount', editor);
    editor.focus();
  }
  onChange(newValue, e) {
    console.log('onChange', newValue, e);
  }

  render() {
    const code = this.state.code;
    const options = {
      selectOnLineNumbers: true
    };
    return (
      <div>
        <h2>Welcome to R and D, or Research and development</h2>
        <p>
          Here, you can design a spacecraft. Each consists of
        </p>

        <ol>
          <li>QEP</li>
          <li>QROM</li>
          <li>main thruster</li>
          <li>directional thruster</li>
          <li>sensor array and sensors</li>
          <li>transmitter array and transmitters</li>
          <li>cargo bay</li>
          <li>manipulator apparatus</li>
          <li>landing apparatus</li>
          <li>frame</li>
        </ol>

      </div>
    );
  }
}
// export default Awsim;
export default <Rd />;
