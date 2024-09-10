import "./styles.css";
import displayHomePage from "./pages/Home/home-page.js";
import displayMenuPage from "./pages/Menu/menu-page.js";

displayHomePage();

const navMenu = document.querySelectorAll(".nav-menu");
navMenu.forEach((item) =>
  item.addEventListener("click", () => {
    const id = item.id.split("-")[0];
    switch (id) {
      case "home":
        displayHomePage();
        break;
      case "menu":
        displayMenuPage();
        break;
      case "about":
        displayHomePage();
        break;
      default:
        displayHomePage();
        break;
    }
  })
);
