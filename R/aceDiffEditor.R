#' Ace diff editor
#' @description Open the Ace diff editor.
#'
#' @param file1,file2 paths to files
#' @param mode the language of the files; if \code{NULL}, the mode is guessed
#'   from the extension of the first file;
#'   run \code{\link{getAceModes}} to get the list of available modes
#' @param theme the theme of the editor; if \code{NULL}, the theme is set to the
#'   theme currently used in RStudio; run \code{\link{getAceThemes}} to get
#'   the list of available themes
#' @param fontSize font size
#' @param tabSize number of spaces for the indentation (usually \code{2} or
#'   \code{4}); if \code{NULL}, it is set to the one used in RStudio
#' @param autoCompletion logical, whether to enable the auto completion
#' @param snippets logical, whether to enable the snippets (for example, there
#'   is a snippet for \code{switch} in JavaScript)
#' @param width,height dimensions; the default values are nice for usage in
#'   the RStudio viewer pane
#' @param elementId a HTML id for the container; this is useless for common
#'   usage
#'
#' @note The diff editor does not correctly reacts when one resizes the RStudio
#'   viewer pane. You have to resize it before opening the diff editor.
#'
#' @importFrom htmlwidgets createWidget
#' @importFrom reactR component reactMarkup
#' @importFrom tools file_ext
#'
#' @export
#' @examples file <- system.file("htmlwidgets", "aceEditor.css", package = "aceEditor")
#' aceDiffEditor(file, file)
aceDiffEditor <- function(
  file1, file2, mode = NULL, theme = NULL,
  fontSize = 14, tabSize = NULL,
  autoCompletion = TRUE, snippets = FALSE,
  width = NULL, height = NULL,
  elementId = NULL
) {

  if(!is.null(mode) && !is.element(mode, getAceModes())){
    message(
      "Invalid `mode` argument.",
      "Run `getAceModes()` to get the list of available modes."
    )
  }

  if(is.null(theme)){
    if(isAvailable()){
      themeInfo <- getThemeInfo()
      theme <- gsub(" ", "_", tolower(themeInfo[["editor"]]))
    }else{
      theme <- "cobalt"
    }
  }else{
    if(!is.element(theme, getAceThemes())){
      message(
        "This theme is not available.",
        "Run `getAceThemes()` to get the list of available themes."
      )
    }
  }

  if(!file.exists(file1)){
    stop(sprintf("File '%s' not found.", file1))
  }
  if(!file.exists(file2)){
    stop(sprintf("File '%s' not found.", file2))
  }

  ext <- file_ext(file1)
  if(tolower(ext) %in% binaryExtensions){
    stop(sprintf("Cannot open files of type '%s'.", ext))
  }
  ext2 <- file_ext(file2)
  if(tolower(ext2) %in% binaryExtensions){
    stop(sprintf("Cannot open files of type '%s'.", ext2))
  }
  if(is.null(mode)){
    if(is.null(mode <- modeFromExtension(ext))){
      message("Unrecognized language; please use the `mode` argument.")
      mode <- "text"
    }
  }
  contents <- list(
    paste0(suppressWarnings(readLines(file1)), collapse = "\n"),
    paste0(suppressWarnings(readLines(file2)), collapse = "\n")
  )

  # describe a React component to send to the browser for rendering.
  editor <- component(
    "AceDiff",
    list(
      contents = contents,
      mode = mode,
      theme = theme,
      fontSize = fontSize,
      tabSize = ifelse(is.null(tabSize), getTabSize(), tabSize),
      autoCompletion = autoCompletion,
      snippets = snippets,
      fileName1 = basename(file1),
      fileName2 = basename(file2)
    )
  )

  # create widget
  createWidget(
    name = "aceEditor",
    x = reactMarkup(editor),
    width = width,
    height = height,
    package = "aceEditor",
    elementId = elementId
  )
}
