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
