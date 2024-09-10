export default function displayMenuPage() {
  const content = document.getElementById("content");
  content.innerHTML = "";

  const container = Object.assign(document.createElement("div"), {
    className: "container",
  });

  const homePage = Object.assign(document.createElement("div"), {
    id: "menu-page",
  });

  container.appendChild(homePage);
  content.appendChild(container);
}
