const bar = document.querySelector(".bar");
const close = document.querySelector(".close");
bar.addEventListener("click", () => {
  const element1 = document.querySelector(".sidebar");
  element1.classList.add("sidebar-active");
  bar.classList.add("bar-hidden");
  console.log("clicked");
});

close.addEventListener("click", () => {
  const element1 = document.querySelector(".sidebar");
  element1.classList.remove("sidebar-active");
  bar.classList.remove("bar-hidden");
  console.log("clicked");
});
