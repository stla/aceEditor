#' Called by HTMLWidgets to produce the widget's root element.
#' @importFrom reactR html_dependency_corejs html_dependency_react html_dependency_reacttools
#' @importFrom htmltools tagList tags
#' @noRd
widget_html.aceEditor <- function(id, style, class, ...) {
  tagList(
    # Necessary for RStudio viewer version < 1.2
    html_dependency_corejs(),
    html_dependency_react(),
    html_dependency_reacttools(),
    tags$div(
      tags$div(
        id = paste0("buttonsBar_", id),
        class = "buttonsBar",
        tags$div(
          class = "buttonsBlock",
          tags$button(
            id = paste0("btn-prettify_", id),
            class = "leftButton",
            "prettify"
          ),
          tags$button(
            id = paste0("btn-format_", id),
            class = "leftButton",
            "format"
          )
        ),
        tags$button(
          id = paste0("btn-save_", id),
          class = "rightButton",
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
