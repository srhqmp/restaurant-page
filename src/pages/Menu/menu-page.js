import menu from "./menu.js";
import "./style.css";

const generateElement = ({ type, textContent, className, id, src, alt }) => {
  let attributes = { type };
  if (textContent) {
    attributes.textContent = textContent;
  }
  if (className) {
    attributes.className = className;
  }
  if (id) {
    attributes.id = id;
  }
  if (type === "img") {
    attributes.src = src;
    attributes.alt = alt || "";
  }

  const element = Object.assign(document.createElement(type), attributes);
  return element;
};

const generateItem = ({ name, image, category }) => {
  const item = generateElement({ type: "div", className: "item" });
  const photo = generateElement({
    type: "img",
    src: image,
    alt: name,
  });
  const h3 = generateElement({ type: "h3", textContent: name });
  const badge = generateElement({
    type: "div",
    textContent: category,
    className: `badge ${category}`,
  });

  item.appendChild(photo);
  item.appendChild(h3);
  item.appendChild(badge);
  return item;
};

const generateMenuItems = () => {
  const items = menu.map((item) => generateItem(item));
  return items;
};

export default function displayMenuPage() {
  const content = document.getElementById("content");
  content.innerHTML = "";

  const container = generateElement({ type: "div", className: "container" });
  const menuPage = Object.assign(document.createElement("div"), {
    id: "menu-page",
  });
  const header = generateElement({
    type: "h2",
    textContent: "Our Heavenly Menu",
  });
  container.appendChild(header);

  const menu = generateElement({ type: "div", className: "menu" });
  container.appendChild(menu);

  const menuItems = generateMenuItems();
  menuItems.forEach((item) => menu.appendChild(item));

  container.appendChild(menuPage);
  content.appendChild(container);
}
