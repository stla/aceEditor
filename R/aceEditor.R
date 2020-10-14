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

  # describe a React component to send to the browser for rendering.
  editor <- component(
    "Ace",
    list(
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


#' Called by HTMLWidgets to produce the widget's root element.
#' @importFrom reactR html_dependency_corejs html_dependency_react html_dependency_reacttools
#' @importFrom htmltools tagList tags
#' @noRd
aceEditor_html <- function(id, style, class, ...) {
  tagList(
    # Necessary for RStudio viewer version < 1.2
    html_dependency_corejs(),
    html_dependency_react(),
    html_dependency_reacttools(),
    tags$div(
      id = "buttonsBar",
      tags$div(
        id = "buttonsBlock",
        tags$button(
          id = "btn-prettify",
          "prettify"
        ),
        tags$button(
          id = "btn-format",
          "format"
        )
      ),
      tags$button(
        id = "btn-save",
        "save"
      ),
      tags$div(style = "clear: both;")
    ),
    tags$div(id = id, class = class, style = style)
  )
}
