const outer = document.querySelector(".outer");
const inner = document.querySelector(".inner");
const body = document.querySelector("body");

inner.addEventListener("click", () => {
  inner.classList.toggle("activeinner");
  outer.classList.toggle("activeouter");
  body.classList.toggle("active");
});
