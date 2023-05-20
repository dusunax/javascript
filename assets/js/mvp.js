// mvp.js

// Create a link element for mvp.css
const mvpCssLink = document.createElement("link");
mvpCssLink.rel = "stylesheet";
mvpCssLink.href = "https://unpkg.com/mvp.css@1.12/mvp.css";

// Create a link element for Font Awesome CSS
const fontAwesomeCssLink = document.createElement("link");
fontAwesomeCssLink.rel = "stylesheet";
fontAwesomeCssLink.href =
  "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css";

// Append the link elements to the head element
document.head.appendChild(mvpCssLink);
document.head.appendChild(fontAwesomeCssLink);
