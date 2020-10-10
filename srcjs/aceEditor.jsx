// jshint ignore: start

import { reactWidget } from "reactR";
import * as A from "./A";

//// import ace from 'ace-builds';

//import "ace-builds/webpack-resolver";

//import "ace-builds/src-noconflict/ace";
//import "ace-builds/src-noconflict/worker-javascript";
//import ace from 'ace-builds';
//ace.config.setModuleUrl('ace/mode/javascript_worker', require('file-loader?esModule=false!ace-builds/src-noconflict/worker-javascript.js'))

import AceEditor from "react-ace";

//import jsonWorkerUrl from "file-loader!ace-builds/src-noconflict/worker-json";
//ace.config.setModuleUrl("ace/mode/json_worker", jsonWorkerUrl);
//import xmlWorkerUrl from "file-loader!ace-builds/src-noconflict/worker-xml";
//ace.config.setModuleUrl("ace/mode/xml_worker", xmlWorkerUrl);

//import jsWorkerUrl from "file-loader?esModule=false!ace-builds/src-noconflict/worker-javascript";

////import jsWorkerUrl from 'ace-builds/src-noconflict/worker-javascript';
////ace.config.setModuleUrl("ace/mode/javascript_worker", jsWorkerUrl);

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-cobalt";
/*----------------------------------------------------------------------------*/

$(document).ready(function () { // To put in componentDidMount()

});





/*----------------------------------------------------------------------------*/
function onChange(newValue) {
  //console.log("change", newValue);
}

class Ace extends React.PureComponent {

  constructor(props) {
    super(props);
  }

  componentDidMount() {

    let mode = this.props.mode,
        fileName = this.props.fileName;

    // disable buttons according to mode 

    $("#btn-prettify").on("click", function () {
      let ed = ace.edit("UNIQUE_ID_OF_DIV");
      let parser;
      switch (mode) {
        case "javascript":
          parser = "babel";
          break;
        case "jsx":
          parser = "babel";
          break;
        case "css":
          parser = "css";
          break;
        case "scss":
          parser = "css";
          break;
        case "html":
          parser = "html";
          break;
        case "rhtml":
          parser = "html";
          break;
        case "markdown":
          parser = "markdown";
          break;
        case "yaml":
          parser = "yaml";
          break;
        case "typescript":
          parser = "typescript";
          break;
      }
      let result = A.prettify(ed.getValue(), parser);
      console.log(result);
      if(result.error === null) {
        ed.setValue(result.prettyCode, -1);
      } else {
        alert("error");
      }
    });
  
    $("#btn-format").on("click", function () {
      let ed = ace.edit("UNIQUE_ID_OF_DIV");
      let parser;
      switch (mode) {
        case "javascript":
          parser = "javascript";
          break;
        case "jsx":
          parser = "javascript";
          break;
        case "css":
          parser = "css";
          break;
        case "scss":
          parser = "css";
          break;
        case "html":
          parser = "html";
          break;
        case "rhtml":
          parser = "html";
          break;
      }
      let result = A.format(ed.getValue(), parser);
      console.log(result);
      if(result.error === null) {
        ed.setValue(result.prettyCode, -1);
      } else {
        alert("error");
      }
    });
  
    $("#btn-save").on("click", function () {
      let ed = ace.edit("UNIQUE_ID_OF_DIV");
      const a = document.createElement("a");
      document.body.append(a);
      a.download = fileName;
      a.href = "data:text/plain;base64," + btoa(ed.getValue());
      a.click();
      a.remove();
    });
  
  }

  render() {
    return (
      <AceEditor
        theme="cobalt"
        mode={this.props.mode}
        value={this.props.contents}
        onChange={onChange}
        name="UNIQUE_ID_OF_DIV"
        editorProps={{ $blockScrolling: true }}
        setOptions={{ useWorker: false }}
        showGutter={true}
      />
    );
  }
}

reactWidget("aceEditor", "output", { Ace: Ace }, {});
