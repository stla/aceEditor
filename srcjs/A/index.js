/* jshint esversion: 6 */

export const toUTCtime = function (string) {
  let ymd = string.split("-");
  return Date.UTC(ymd[0], ymd[1] - 1, ymd[2]);
};


export const prettify = function (code, parser) {
  let prettyCode = null,
    error = null;
  try {
    prettyCode = prettier.format(code, {
      parser: parser,
      plugins: prettierPlugins,
      trailingComma: "none",
      tabWidth: 2
    });
  } catch (err) {
    error = err.message;
  }
  return {
    prettyCode: prettyCode,
    error: error
  };
};


export const format = function(code, mode) {
  var prettyCode = null, 
    error = null;
  let tabString = " ".repeat(2);
  try {
    switch(mode) {
      case "javascript":
        prettyCode = indent.js(code, {tabString: tabString});
        break;
      case "css":
        prettyCode = indent.css(code, {tabString: tabString});
        break;
      case "html":
        prettyCode = indent.html(code, {tabString: tabString});
        break;
    }
  } catch(err) {
    error = err.message;
  }
  return {
    prettyCode: prettyCode,
    error: error
  };
};
