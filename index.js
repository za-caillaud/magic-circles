setInterval(() => {
  const circle = document.createElement("span");
  circle.classList.add("circle");

  let size = Math.random() * 300 + 20 + "px";
  circle.style.height = size;
  circle.style.width = size;

  circle.style.left = Math.random() * 100 + "%";
  circle.style.top = Math.random() * 100 + "%";

  document.body.appendChild(circle);

  circle.addEventListener("click", () => {
    circle.remove();
  });

  setTimeout(() => {
    circle.remove();
  }, 5000);
}, 300);
