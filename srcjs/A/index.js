/* jshint esversion: 6 */

export const utf8_to_base64 = function(str) {
  return btoa(unescape(encodeURIComponent(str)));
};


export const prettify = function (code, parser, tabSize) {
  let prettyCode = null,
    error = null;
  try {
    prettyCode = prettier.format(code, {
      parser: parser,
      plugins: prettierPlugins,
      trailingComma: "none",
      tabWidth: tabSize
    });
  } catch (err) {
    error = err.message;
  }
  return {
    prettyCode: prettyCode,
    error: error
  };
};


export const format = function(code, mode, tabSize) {
  var prettyCode = null, 
    error = null;
  let tabString = " ".repeat(tabSize);
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
