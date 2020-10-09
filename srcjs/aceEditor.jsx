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

$(document).ready(function () {

  $("#btn-prettify").on("click", function () {
    let ed = ace.edit("UNIQUE_ID_OF_DIV");
    let result = A.prettify(ed.getValue(), "babel");
    console.log(result);
    if(result.error === null) {
      ed.setValue(result.prettyCode, -1);
    } else {
      alert("error");
    }
  });

  $("#btn-format").on("click", function () {
    let ed = ace.edit("UNIQUE_ID_OF_DIV");
    let result = A.format(ed.getValue(), "javascript");
    console.log(result);
    if(result.error === null) {
      ed.setValue(result.prettyCode, -1);
    } else {
      alert("error");
    }
  });
    
});




/*----------------------------------------------------------------------------*/
function onChange(newValue) {
  //console.log("change", newValue);
}

class Ace extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <AceEditor
        mode="javascript"
        theme="cobalt"
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
