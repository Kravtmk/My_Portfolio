document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
    const options = { threshold: 0.2 };
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, options);
  
    sections.forEach(section => observer.observe(section));
  });
  
  window.addEventListener("scroll", () => {
    let scrollButton = document.getElementById("scrollToTop");
    if (window.scrollY > 300) {
        scrollButton.style.display = "block";
    } else {
        scrollButton.style.display = "none";
    }
});

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.querySelector("#projectsCarousel");
  carousel.addEventListener("slid.bs.carousel", () => {
      console.log("Slide changed");
  });
});