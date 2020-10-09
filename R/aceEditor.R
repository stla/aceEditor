#' <Add Title>
#'
#' <Add Description>
#'
#' @import htmlwidgets reactR
#'
#' @export
aceEditor <- function(message, width = NULL, height = NULL, elementId = NULL) {

  # describe a React component to send to the browser for rendering.
  component <- reactR::component(
    "Ace",
    list()
  )

  # create widget
  htmlwidgets::createWidget(
    name = "aceEditor",
    reactR::reactMarkup(component),
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
