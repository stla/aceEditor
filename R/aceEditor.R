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
#' @import htmltools
#' @noRd
aceEditor_html <- function(id, style, class, ...) {
  htmltools::tagList(
    # Necessary for RStudio viewer version < 1.2
    reactR::html_dependency_corejs(),
    reactR::html_dependency_react(),
    reactR::html_dependency_reacttools(),
    htmltools::tags$button(id = "btn-prettify", "hello"),
    htmltools::tags$div(id = id, class = class, style = style)
  )
}
