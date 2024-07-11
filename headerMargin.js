function adjustMainMargin() {
  const header = document.querySelector("header");
  const main = document.querySelector("main");
  const headerHeight = header.offsetHeight;
  main.style.marginTop = `${headerHeight}px`;
}

adjustMainMargin();

// Adjust the margin on page load
window.addEventListener("load", adjustMainMargin);

// Adjust the margin on window resize
window.addEventListener("resize", adjustMainMargin);
