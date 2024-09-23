document.getElementById("hamburger").addEventListener("click", function() {
    const nav = document.getElementById("main-nav").querySelector("ul");
    nav.style.display = nav.style.display === "flex" ? "none" : "flex";
  });
  