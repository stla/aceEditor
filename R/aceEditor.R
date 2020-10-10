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
  width = NULL, height = NULL,
  elementId = NULL
) {

  if(is.null(contents)){
    if(is.null(mode)){
      mode <- "text"
    }
  }else if(missing(contents)){
    if(isAvailable()){
      context <- getSourceEditorContext()
      contents <- paste0(context[["contents"]], collapse = "\n")
    }else{
      contents <- NULL
    }
    if(is.null(mode)){
      mode <- "text" # no, file ext
    }
  }else if(file.exists(contents)){
    if(is.null(mode)){
      ext <- tolower(file_ext(contents))
      mode <- switch(
        ext,
        js = "javascript"
      )
    }
    contents <- paste0(suppressWarnings(readLines(contents)), collapse = "\n")
  }

  # describe a React component to send to the browser for rendering.
  editor <- component(
    "Ace",
    list(
      contents = contents,
      mode = mode
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
        button(
          id = "btn-prettify",
          "prettify"
        ),
        button(
          id = "btn-format",
          "format"
        )
      )
    ),
    tags$div(id = id, class = class, style = style)
  )
}
