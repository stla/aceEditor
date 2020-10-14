// jshint ignore: start

import { reactWidget } from "reactR";
import * as A from "./A";

//// import ace from 'ace-builds';

//import "ace-builds/webpack-resolver";

//import "ace-builds/src-min-noconflict/ace";
//import "ace-builds/src-min-noconflict/worker-javascript";
//import ace from 'ace-builds';
//ace.config.setModuleUrl('ace/mode/javascript_worker', require('file-loader?esModule=false!ace-builds/src-min-noconflict/worker-javascript.js'))

import AceEditor from "react-ace";
import { diff as DiffEditor } from "react-ace";

//import jsonWorkerUrl from "file-loader!ace-builds/src-min-noconflict/worker-json";
//ace.config.setModuleUrl("ace/mode/json_worker", jsonWorkerUrl);
//import xmlWorkerUrl from "file-loader!ace-builds/src-min-noconflict/worker-xml";
//ace.config.setModuleUrl("ace/mode/xml_worker", xmlWorkerUrl);

//import jsWorkerUrl from "file-loader?esModule=false!ace-builds/src-min-noconflict/worker-javascript";

////import jsWorkerUrl from 'ace-builds/src-min-noconflict/worker-javascript';
////ace.config.setModuleUrl("ace/mode/javascript_worker", jsWorkerUrl);

import "ace-builds/src-min-noconflict/ext-language_tools";
import "ace-builds/src-min-noconflict/ext-searchbox";
/*
import "ace-builds/src-min-noconflict/snippets/c_cpp";
import "ace-builds/src-min-noconflict/snippets/css";
import "ace-builds/src-min-noconflict/snippets/fortran";
import "ace-builds/src-min-noconflict/snippets/glsl";
import "ace-builds/src-min-noconflict/snippets/haskell";
import "ace-builds/src-min-noconflict/snippets/html";
import "ace-builds/src-min-noconflict/snippets/java";
import "ace-builds/src-min-noconflict/snippets/javascript";
import "ace-builds/src-min-noconflict/snippets/json";
import "ace-builds/src-min-noconflict/snippets/jsx";
import "ace-builds/src-min-noconflict/snippets/julia";
import "ace-builds/src-min-noconflict/snippets/latex";
import "ace-builds/src-min-noconflict/snippets/markdown";
import "ace-builds/src-min-noconflict/snippets/python";
import "ace-builds/src-min-noconflict/snippets/r";
import "ace-builds/src-min-noconflict/snippets/rhtml";
import "ace-builds/src-min-noconflict/snippets/scss";
import "ace-builds/src-min-noconflict/snippets/sql";
import "ace-builds/src-min-noconflict/snippets/svg";
import "ace-builds/src-min-noconflict/snippets/tex";
import "ace-builds/src-min-noconflict/snippets/text";
import "ace-builds/src-min-noconflict/snippets/typescript";
import "ace-builds/src-min-noconflict/snippets/xml";
import "ace-builds/src-min-noconflict/snippets/yaml";

import "ace-builds/src-min-noconflict/mode-abap";
import "ace-builds/src-min-noconflict/mode-abc";
import "ace-builds/src-min-noconflict/mode-actionscript";
import "ace-builds/src-min-noconflict/mode-ada";
import "ace-builds/src-min-noconflict/mode-alda";
import "ace-builds/src-min-noconflict/mode-apache_conf";
import "ace-builds/src-min-noconflict/mode-apex";
import "ace-builds/src-min-noconflict/mode-applescript";
import "ace-builds/src-min-noconflict/mode-aql";
import "ace-builds/src-min-noconflict/mode-asciidoc";
import "ace-builds/src-min-noconflict/mode-asl";
import "ace-builds/src-min-noconflict/mode-assembly_x86";
import "ace-builds/src-min-noconflict/mode-autohotkey";
import "ace-builds/src-min-noconflict/mode-batchfile";
import "ace-builds/src-min-noconflict/mode-c_cpp";
import "ace-builds/src-min-noconflict/mode-c9search";
import "ace-builds/src-min-noconflict/mode-cirru";
import "ace-builds/src-min-noconflict/mode-clojure";
import "ace-builds/src-min-noconflict/mode-cobol";
import "ace-builds/src-min-noconflict/mode-coffee";
import "ace-builds/src-min-noconflict/mode-coldfusion";
import "ace-builds/src-min-noconflict/mode-crystal";
import "ace-builds/src-min-noconflict/mode-csharp";
import "ace-builds/src-min-noconflict/mode-csound_document";
import "ace-builds/src-min-noconflict/mode-csound_orchestra";
import "ace-builds/src-min-noconflict/mode-csound_score";
import "ace-builds/src-min-noconflict/mode-csp";
import "ace-builds/src-min-noconflict/mode-css";
import "ace-builds/src-min-noconflict/mode-curly";
import "ace-builds/src-min-noconflict/mode-d";
import "ace-builds/src-min-noconflict/mode-dart";
import "ace-builds/src-min-noconflict/mode-diff";
import "ace-builds/src-min-noconflict/mode-django";
import "ace-builds/src-min-noconflict/mode-dockerfile";
import "ace-builds/src-min-noconflict/mode-dot";
import "ace-builds/src-min-noconflict/mode-drools";
import "ace-builds/src-min-noconflict/mode-edifact";
import "ace-builds/src-min-noconflict/mode-eiffel";
import "ace-builds/src-min-noconflict/mode-ejs";
import "ace-builds/src-min-noconflict/mode-elixir";
import "ace-builds/src-min-noconflict/mode-elm";
import "ace-builds/src-min-noconflict/mode-erlang";
import "ace-builds/src-min-noconflict/mode-forth";
import "ace-builds/src-min-noconflict/mode-fortran";
import "ace-builds/src-min-noconflict/mode-fsharp";
import "ace-builds/src-min-noconflict/mode-fsl";
import "ace-builds/src-min-noconflict/mode-ftl";
import "ace-builds/src-min-noconflict/mode-gcode";
import "ace-builds/src-min-noconflict/mode-gherkin";
import "ace-builds/src-min-noconflict/mode-gitignore";
import "ace-builds/src-min-noconflict/mode-glsl";
import "ace-builds/src-min-noconflict/mode-gobstones";
import "ace-builds/src-min-noconflict/mode-golang";
import "ace-builds/src-min-noconflict/mode-graphqlschema";
import "ace-builds/src-min-noconflict/mode-groovy";
import "ace-builds/src-min-noconflict/mode-haml";
import "ace-builds/src-min-noconflict/mode-handlebars";
import "ace-builds/src-min-noconflict/mode-haskell_cabal";
import "ace-builds/src-min-noconflict/mode-haskell";
import "ace-builds/src-min-noconflict/mode-haxe";
import "ace-builds/src-min-noconflict/mode-hjson";
import "ace-builds/src-min-noconflict/mode-html_elixir";
import "ace-builds/src-min-noconflict/mode-html_ruby";
import "ace-builds/src-min-noconflict/mode-html";
import "ace-builds/src-min-noconflict/mode-ini";
import "ace-builds/src-min-noconflict/mode-io";
import "ace-builds/src-min-noconflict/mode-jack";
import "ace-builds/src-min-noconflict/mode-jade";
import "ace-builds/src-min-noconflict/mode-java";
import "ace-builds/src-min-noconflict/mode-javascript";
import "ace-builds/src-min-noconflict/mode-json";
import "ace-builds/src-min-noconflict/mode-json5";
import "ace-builds/src-min-noconflict/mode-jsoniq";
import "ace-builds/src-min-noconflict/mode-jsp";
import "ace-builds/src-min-noconflict/mode-jssm";
import "ace-builds/src-min-noconflict/mode-jsx";
import "ace-builds/src-min-noconflict/mode-julia";
import "ace-builds/src-min-noconflict/mode-kotlin";
import "ace-builds/src-min-noconflict/mode-latex";
import "ace-builds/src-min-noconflict/mode-less";
import "ace-builds/src-min-noconflict/mode-liquid";
import "ace-builds/src-min-noconflict/mode-lisp";
import "ace-builds/src-min-noconflict/mode-livescript";
import "ace-builds/src-min-noconflict/mode-logiql";
import "ace-builds/src-min-noconflict/mode-logtalk";
import "ace-builds/src-min-noconflict/mode-lsl";
import "ace-builds/src-min-noconflict/mode-lua";
import "ace-builds/src-min-noconflict/mode-luapage";
import "ace-builds/src-min-noconflict/mode-lucene";
import "ace-builds/src-min-noconflict/mode-makefile";
import "ace-builds/src-min-noconflict/mode-markdown";
import "ace-builds/src-min-noconflict/mode-mask";
import "ace-builds/src-min-noconflict/mode-matlab";
import "ace-builds/src-min-noconflict/mode-maze";
import "ace-builds/src-min-noconflict/mode-mediawiki";
import "ace-builds/src-min-noconflict/mode-mel";
import "ace-builds/src-min-noconflict/mode-mixal";
import "ace-builds/src-min-noconflict/mode-mushcode";
import "ace-builds/src-min-noconflict/mode-mysql";
import "ace-builds/src-min-noconflict/mode-nginx";
import "ace-builds/src-min-noconflict/mode-nim";
import "ace-builds/src-min-noconflict/mode-nix";
import "ace-builds/src-min-noconflict/mode-nsis";
import "ace-builds/src-min-noconflict/mode-nunjucks";
import "ace-builds/src-min-noconflict/mode-objectivec";
import "ace-builds/src-min-noconflict/mode-ocaml";
import "ace-builds/src-min-noconflict/mode-pascal";
import "ace-builds/src-min-noconflict/mode-perl";
import "ace-builds/src-min-noconflict/mode-perl6";
import "ace-builds/src-min-noconflict/mode-pgsql";
import "ace-builds/src-min-noconflict/mode-php_laravel_blade";
import "ace-builds/src-min-noconflict/mode-php";
import "ace-builds/src-min-noconflict/mode-pig";
import "ace-builds/src-min-noconflict/mode-plain_text";
import "ace-builds/src-min-noconflict/mode-powershell";
import "ace-builds/src-min-noconflict/mode-praat";
import "ace-builds/src-min-noconflict/mode-prisma";
import "ace-builds/src-min-noconflict/mode-prolog";
import "ace-builds/src-min-noconflict/mode-properties";
import "ace-builds/src-min-noconflict/mode-protobuf";
import "ace-builds/src-min-noconflict/mode-puppet";
import "ace-builds/src-min-noconflict/mode-python";
import "ace-builds/src-min-noconflict/mode-qml";
import "ace-builds/src-min-noconflict/mode-r";
import "ace-builds/src-min-noconflict/mode-razor";
import "ace-builds/src-min-noconflict/mode-rdoc";
import "ace-builds/src-min-noconflict/mode-red";
import "ace-builds/src-min-noconflict/mode-redshift";
import "ace-builds/src-min-noconflict/mode-rhtml";
import "ace-builds/src-min-noconflict/mode-rst";
import "ace-builds/src-min-noconflict/mode-ruby";
import "ace-builds/src-min-noconflict/mode-rust";
import "ace-builds/src-min-noconflict/mode-sass";
import "ace-builds/src-min-noconflict/mode-scad";
import "ace-builds/src-min-noconflict/mode-scala";
import "ace-builds/src-min-noconflict/mode-scheme";
import "ace-builds/src-min-noconflict/mode-scss";
import "ace-builds/src-min-noconflict/mode-sh";
import "ace-builds/src-min-noconflict/mode-sjs";
import "ace-builds/src-min-noconflict/mode-slim";
import "ace-builds/src-min-noconflict/mode-smarty";
import "ace-builds/src-min-noconflict/mode-snippets";
import "ace-builds/src-min-noconflict/mode-soy_template";
import "ace-builds/src-min-noconflict/mode-space";
import "ace-builds/src-min-noconflict/mode-sparql";
import "ace-builds/src-min-noconflict/mode-sql";
import "ace-builds/src-min-noconflict/mode-sqlserver";
import "ace-builds/src-min-noconflict/mode-stylus";
import "ace-builds/src-min-noconflict/mode-svg";
import "ace-builds/src-min-noconflict/mode-swift";
import "ace-builds/src-min-noconflict/mode-tcl";
import "ace-builds/src-min-noconflict/mode-terraform";
import "ace-builds/src-min-noconflict/mode-tex";
import "ace-builds/src-min-noconflict/mode-text";
import "ace-builds/src-min-noconflict/mode-textile";
import "ace-builds/src-min-noconflict/mode-toml";
import "ace-builds/src-min-noconflict/mode-tsx";
import "ace-builds/src-min-noconflict/mode-turtle";
import "ace-builds/src-min-noconflict/mode-twig";
import "ace-builds/src-min-noconflict/mode-typescript";
import "ace-builds/src-min-noconflict/mode-vala";
import "ace-builds/src-min-noconflict/mode-vbscript";
import "ace-builds/src-min-noconflict/mode-velocity";
import "ace-builds/src-min-noconflict/mode-verilog";
import "ace-builds/src-min-noconflict/mode-vhdl";
import "ace-builds/src-min-noconflict/mode-visualforce";
import "ace-builds/src-min-noconflict/mode-wollok";
import "ace-builds/src-min-noconflict/mode-xml";
import "ace-builds/src-min-noconflict/mode-xquery";
import "ace-builds/src-min-noconflict/mode-yaml";
import "ace-builds/src-min-noconflict/mode-zeek";
*/
import "ace-builds/src-min-noconflict/mode-r";

import "ace-builds/src-min-noconflict/theme-ambiance";
import "ace-builds/src-min-noconflict/theme-chaos";
import "ace-builds/src-min-noconflict/theme-chrome";
import "ace-builds/src-min-noconflict/theme-clouds_midnight";
import "ace-builds/src-min-noconflict/theme-clouds";
import "ace-builds/src-min-noconflict/theme-cobalt";
import "ace-builds/src-min-noconflict/theme-crimson_editor";
import "ace-builds/src-min-noconflict/theme-dawn";
import "ace-builds/src-min-noconflict/theme-dracula";
import "ace-builds/src-min-noconflict/theme-dreamweaver";
import "ace-builds/src-min-noconflict/theme-eclipse";
import "ace-builds/src-min-noconflict/theme-github";
import "ace-builds/src-min-noconflict/theme-gob";
import "ace-builds/src-min-noconflict/theme-gruvbox";
import "ace-builds/src-min-noconflict/theme-idle_fingers";
import "ace-builds/src-min-noconflict/theme-iplastic";
import "ace-builds/src-min-noconflict/theme-katzenmilch";
import "ace-builds/src-min-noconflict/theme-kr_theme";
import "ace-builds/src-min-noconflict/theme-kuroir";
import "ace-builds/src-min-noconflict/theme-merbivore_soft";
import "ace-builds/src-min-noconflict/theme-merbivore";
import "ace-builds/src-min-noconflict/theme-mono_industrial";
import "ace-builds/src-min-noconflict/theme-monokai";
import "ace-builds/src-min-noconflict/theme-nord_dark";
import "ace-builds/src-min-noconflict/theme-pastel_on_dark";
import "ace-builds/src-min-noconflict/theme-solarized_dark";
import "ace-builds/src-min-noconflict/theme-solarized_light";
import "ace-builds/src-min-noconflict/theme-sqlserver";
import "ace-builds/src-min-noconflict/theme-terminal";
import "ace-builds/src-min-noconflict/theme-textmate";
import "ace-builds/src-min-noconflict/theme-tomorrow_night_blue";
import "ace-builds/src-min-noconflict/theme-tomorrow_night_bright";
import "ace-builds/src-min-noconflict/theme-tomorrow_night_eighties";
import "ace-builds/src-min-noconflict/theme-tomorrow_night";
import "ace-builds/src-min-noconflict/theme-tomorrow";
import "ace-builds/src-min-noconflict/theme-twilight";
import "ace-builds/src-min-noconflict/theme-vibrant_ink";
import "ace-builds/src-min-noconflict/theme-xcode";

/*----------------------------------------------------------------------------*/

//$(document).ready(function () { 
//});





/*----------------------------------------------------------------------------*/
function onChange(newValue) {
  $("#btn-save").show(1000);
  $("#btn-save").css("font-style", "italic");
}

class Ace extends React.PureComponent {

  constructor(props) {
    super(props);
  }

  componentDidMount() {

    let mode = this.props.mode,
        fileName = this.props.fileName,
        tabSize = this.props.tabSize;

    window.addEventListener("beforeunload", function (e) { 
      if($("#btn-save").css("font-style") === "italic") {
        document.getElementById("btn-save").click();
      }
    }); 
      
    // hide buttons according to mode 
    let formattable = [
      "javascript", "jsx", "css", "scss", "html", "rhtml"
    ];
    let prettifiable = formattable.concat([
      "markdown", "yaml", "typescript"
    ]);
    if(formattable.indexOf(mode) === -1) {
      $("#btn-format").hide();
    }
    if(prettifiable.indexOf(mode) === -1) {
      $("#btn-prettify").hide();
    }

    // buttons actions
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
      let result = A.prettify(ed.getValue(), parser, tabSize);
      console.log(result);
      if(result.error === null) {
        ed.setValue(result.prettyCode, -1);
      } else {
        Swal.fire({
          icon: "error",
          title: "Something went wrong!",
          html: "<pre>" + result.error + "</pre>",
          width: "100%"
        });
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
      let result = A.format(ed.getValue(), parser, tabSize);
      console.log(result);
      if(result.error === null) {
        ed.setValue(result.prettyCode, -1);
      } else {
        alert("error");
      }
    });
  
    $("#btn-save").on("click", function () {
      $("#btn-save").css("font-style", "normal");
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
        name="UNIQUE_ID_OF_DIV"
        theme={this.props.theme}
        mode={this.props.mode}
        value={this.props.contents}
        fontSize={this.props.fontSize}
        editorProps={{ 
          $blockScrolling: true 
        }}
        setOptions={{
          useWorker: false, 
          tabSize: this.props.tabSize,
          enableBasicAutocompletion: false,
          enableLiveAutocompletion: this.props.autoCompletion,
          enableSnippets: this.props.snippets
        }}
        showGutter={true}
        onChange={onChange}
      />
    );
  }
}


/*----------------------------------------------------------------------------*/
class AceDiff extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      value: props.contents
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(newValue) {
    this.setState({
      value: newValue
    });
  }

  render() {
    return (
      <DiffEditor
        name="UNIQUE_ID_OF_DIV"
        theme={this.props.theme}
        mode={this.props.mode}
        value={this.state.value}
        fontSize={this.props.fontSize}
        editorProps={{ 
          $blockScrolling: true 
        }}
        setOptions={{
          useWorker: false, 
          tabSize: this.props.tabSize,
          enableBasicAutocompletion: false,
          enableLiveAutocompletion: this.props.autoCompletion,
          enableSnippets: this.props.snippets
        }}
        showGutter={true}
        onChange={this.onChange}
      />
    );
  }
}


/* -------------------------------------------------------------------------- */
reactWidget("aceEditor", "output", { Ace: Ace, AceDiff: AceDiff }, {});
