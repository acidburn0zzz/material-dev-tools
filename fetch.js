fetch('dist/material-style.css')
  .then((response) => response.text())
  .then(text => chrome.devtools.panels.applyStyleSheet(text));