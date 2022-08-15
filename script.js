const cursor = document.querySelector(".cursor");
const btn = document.querySelector("button");

window.addEventListener("mousemove", (e) => {
  console.log(e);
  cursor.style.top = `${e.pageY - 4}px`;
  cursor.style.left = `${e.pageX - 4}px`;
});

btn.addEventListener("click", () => alert("Clicked"));
