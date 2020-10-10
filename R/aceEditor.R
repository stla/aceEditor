#' <Add Title>
#'
#' <Add Description>
#'
#' @importFrom htmlwidgets createWidget
#' @importFrom reactR component reactMarkup
#' @importFrom rstudioapi getSourceEditorContext isAvailable
#' @importFrom tools file_ext
#'
#' @export
aceEditor <- function(
  contents, mode = NULL,
  fontSize = 14, tabSize = NULL,
  width = NULL, height = NULL,
  elementId = NULL
) {

  fileName <- NULL
  if(missing(contents)){
    if(isAvailable()){
      context <- getSourceEditorContext()
      contents <- paste0(context[["contents"]], collapse = "\n")
    }else{
      contents <- NULL
    }
    if(is.null(mode)){
      ext <- file_ext(context[["path"]])
      mode <- modeFromExtension(ext)
    }
    fileName <- basename(context[["path"]])
  }else if(file.exists(contents)){
    if(is.null(mode)){
      ext <- file_ext(contents)
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
      fileName = fileName,
      fontSize = fontSize,
      tabSize = ifelse(is.null(tabSize), getTabSize(), tabSize)
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
#' @import htmltools reactR
#' @noRd
aceEditor_html <- function(id, style, class, ...) {
  tagList(
    # Necessary for RStudio viewer version < 1.2
    html_dependency_corejs(),
    html_dependency_react(),
    html_dependency_reacttools(),
    withTags(
      div(
        id = "buttonsBar",
        div(
          id = "buttonsBlock",
          button(
            id = "btn-prettify",
            "prettify"
          ),
          button(
            id = "btn-format",
            "format"
          )
        ),
        button(
          id = "btn-save",
          "save"
        ),
        div(style = "clear: both;")
      )
    ),
    tags$div(id = id, class = class, style = style)
  )
}
