const menuIcon = document.getElementById("menu-icon");
const navLinks = document.getElementById("nav-links");

menuIcon.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

function searchSite(event) {
  event.preventDefault();
  const query = document.getElementById("searchInput").value.toLowerCase();

  // Simple client-side search example
  // Assuming you have a list of items to search through
  const items = document.querySelectorAll(".item"); // Replace with actual items
  items.forEach((item) => {
    const content = item.textContent.toLowerCase();
    if (content.includes(query)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });

  // Alternatively, you could redirect to a server-side search page
  // window.location.href = `search.html?query=${encodeURIComponent(query)}`;
}
