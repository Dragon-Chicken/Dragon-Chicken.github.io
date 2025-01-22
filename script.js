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
loadHTML("header", "header.html");
loadHTML("footer", "footer.html");

