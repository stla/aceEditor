#' Ace editor
#' @description Open the Ace editor.
#'
#' @param contents this can be the path to a file, \code{NULL} to open an
#'   empty editor, or missing to open the file currently open in RStudio
#' @param mode the language of the contents; if \code{NULL} and the contents are
#'   read from a file, the mode is guessed from the extension of the file;
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
#' @importFrom htmlwidgets createWidget
#' @importFrom reactR component reactMarkup
#' @importFrom rstudioapi getSourceEditorContext isAvailable getThemeInfo
#' @importFrom tools file_ext
#'
#' @export
#' @examples # in RStudio, `aceEditor()` opens the current file:
#' aceEditor()
#'
#' # opens a new JavaScript file:
#' aceEditor(NULL, mode = "javascript")
#'
#' # opens an existing file:
#' aceEditor(system.file("htmlwidgets", "aceEditor.css", package = "aceEditor"))
#'
#'
#' # two editors side-by-side:
#' library(aceEditor)
#' library(htmltools)
#'
#' ed1 <- aceEditor(
#'   width = "100%", height = "calc(100vh - 10px)"
#' )
#' ed2 <- aceEditor(
#'   width = "100%", height = "calc(100vh - 10px)"
#' )
#'
#' if(interactive()){
#'   browsable(
#'     div(
#'       div(ed1, style="position: fixed; left: 1vw; right: 51vw;"),
#'       div(ed2, style="position: fixed; left: 51vw; right: 1vw;")
#'     )
#'   )
#' }
#'
#'
#' # two stacked editors:
#' library(aceEditor)
#' library(htmltools)
#'
#' ed1 <- aceEditor(
#'   height = "calc(50vh - 10px)", width = "100%"
#' )
#' ed2 <- aceEditor(
#'   height = "calc(50vh - 10px)", width = "100%"
#' )
#'
#' if(interactive()){
#'   browsable(
#'     tagList(
#'       tags$style(HTML(
#'         ".editor {",
#'         "  position: fixed;",
#'         "  left: 1vw;",
#'         "  width: 98vw;",
#'         "}"
#'       )),
#'       div(
#'         div(ed1, class = "editor", style = "bottom: calc(50vh - 25px);"),
#'         div(ed2, class = "editor", style = "top: calc(50vh);")
#'       )
#'     )
#'   )
#' }
aceEditor <- function(
  contents, mode = NULL, theme = NULL,
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
      theme <- "cobalt"
    }
  }

  fileName <- NULL

  if(missing(contents)){
    if(isAvailable()){
      context <- getSourceEditorContext()
      contents <- paste0(context[["contents"]], collapse = "\n")
      if(is.null(mode)){
        ext <- file_ext(context[["path"]])
        mode <- modeFromExtension(ext)
      }
      fileName <- basename(context[["path"]])
    }else{
      contents <- NULL
    }
  }else if(!is.null(contents) && file.exists(contents)){
    ext <- file_ext(contents)
    if(tolower(ext) %in% binaryExtensions){
      stop("Cannot open this type of files.")
    }
    if(is.null(mode)){
      mode <- modeFromExtension(ext)
      fileName <- basename(contents)
    }
    contents <- paste0(suppressWarnings(readLines(contents)), collapse = "\n")
  }
  if(is.null(mode)){
    mode <- "text"
  }
  if(is.null(fileName)){
    fileName <- "untitled"
  }

  if(is.null(elementId)){
    elementId <- paste0("AEW-", randomString(15L))
  }

  # describe a React component to send to the browser for rendering.
  editor <- component(
    "Ace",
    list(
      ID = elementId,
      contents = contents,
      mode = mode,
      theme = theme,
      fileName = fileName,
      fontSize = fontSize,
      tabSize = ifelse(is.null(tabSize), getTabSize(), tabSize),
      autoCompletion = autoCompletion,
      snippets = snippets
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
