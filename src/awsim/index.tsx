
import React from 'react';
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
        <h2>awSim</h2>
        <MonacoEditor
        width="800"
        height="600"
        language="javascript"
        theme="vs-dark"
        value={code}
        options={options}
        miniMap={false}
        // onChange={::this.onChange}
        // editorDidMount={::this.editorDidMount}
      />

      </div>
    );
  }
}
// export default Awsim;
export default <Awsim />;
