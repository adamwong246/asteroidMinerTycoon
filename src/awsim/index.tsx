
import React from 'react';
import { render } from 'react-dom';
import MonacoEditor from 'react-monaco-editor';

class Awsim extends React.Component<{}, {
  code: string;
}> {

  constructor(props) {
    super(props);
    this.state = {
      code: '// type your code...',
    }
  }
  editorDidMount(editor, monaco) {
    // console.log('editorDidMount', editor);
    editor.focus();
  }
  onChange(newValue, e) {
    // console.log('onChange', newValue, e);
  }

  render() {
    const code = this.state.code;
    const options = {
      selectOnLineNumbers: true
    };
    return (
      <div>
        <h2>Welcome to aweSim</h2>
        <p>
          Here at aweSim, we can simluate any physical system within the realms of known computability. Just send us your simRom and some credits, and we'll mathemticlly simulate your experiment on our farm of GPUS, simulating as far into the future as you can afford. Remember, at aweSim you *can* see into the future- for the right price!
        </p>

        <MonacoEditor
        width="800"
        height="600"
        language="javascript"
        theme="vs-dark"
        value={code}
        options={options}
        // onChange={::this.onChange}
        // editorDidMount={::this.editorDidMount}
      />

      </div>
    );
  }
}
// export default Awsim;
export default <Awsim />;
