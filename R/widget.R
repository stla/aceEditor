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
      tags$div(
        id = "saveButtons",
        tags$button(
          id = "btn-save1",
          "save"
        ),
        tags$button(
          id = "btn-save2",
          "save"
        ),
        tags$div(style = "clear: both;")
      )
    ),
    tags$div(id = id, class = class, style = style)
  )
}