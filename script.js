const backToTopButton = document.querySelector(".back-to-top");const backToTopButton = document.querySelector(".back-to-top");







}  });    window.scrollTo({ top: 0, behavior: "smooth" });  backToTopButton.addEventListener("click", () => {if (backToTopButton) {
const toggleBackToTop = () => {
  if (!backToTopButton) return;
  if (window.scrollY > 400) {
    backToTopButton.classList.add("show");
  } else {
    backToTopButton.classList.remove("show");
  }
};

window.addEventListener("scroll", toggleBackToTop, { passive: true });
window.addEventListener("load", toggleBackToTop);

if (backToTopButton) {
  backToTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}
