// Function to load external HTML into a specified element
function loadHTML(elementId, fileName) {
    fetch(fileName)
        .then(response => response.text())
        .then(html => {
            document.getElementById(elementId).innerHTML = html;
        })
        .catch(error => {
            console.warn("Error loading HTML: ", error);
        });
}

// Load the header and footer from the respective HTML files
loadHTML("header", "/header.html");
loadHTML("footer", "/footer.html");

const observer = new MutationObserver((mutations) => {
  /*const button = document.getElementById('hamburger');
  const paragraph = document.querySelector("#testing");
  
  if (button) {
    button.addEventListener("click", updateButton);
    console.log("button is found!", button);
    observer.disconnect();
  }

  function updateButton() {
    if (button.value == "start x") {
      console.log("button pressed");
      button.value = "stop x";
      paragraph.textContent = "x is started";
    } else {
      console.log("button unpressed");
      button.value = "start x";
      paragraph.textContent = "x is stopped";
    }
  }*/

  const btn = document.getElementById("scrollToTopBtn");

  function scrollToTop() {
  // Scroll to top logic
    document.documentElement.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
  btn.addEventListener("click", scrollToTop);
});
observer.observe(document.body, { childList: true, subtree: true });
