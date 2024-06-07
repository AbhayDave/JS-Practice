document.addEventListener("selectionchange", function () {
  const selection = window.getSelection();
  if (selection.toString().trim() !== "") {
    // Check for non-empty selection
    const selectionRange = selection.getRangeAt(0); // Get the range of the selection
    // console.log(selectionRange.extractContents());
    const highlightElement = createHighlightElement(
      selectionRange.extractContents()
    ); // Wrap selection in a highlight element
    selectionRange.deleteContents(); // Remove original selection content
    selectionRange.insertNode(highlightElement); // Insert highlight element at selection range
  } else {
    removeHighlights();
  }
});

function createHighlightElement(textNode) {
  const highlightElement = document.createElement("span");
  highlightElement.classList.add("highlight"); // Add a CSS class for styling
  highlightElement.appendChild(textNode);
  return highlightElement;
}

function removeHighlights() {
  const highlights = document.querySelectorAll(".highlight");
  highlights.forEach((highlight) => highlight.classList.remove("highlight"));
}
