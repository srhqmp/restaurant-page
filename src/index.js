import "./styles.css";
import displayHomePage from "./pages/Home/home-page.js";
import displayMenuPage from "./pages/Menu/menu-page.js";
import displayAboutPage from "./pages/About/about-page.js";

displayHomePage();

const navMenu = document.querySelectorAll(".nav-menu");
navMenu.forEach((item) =>
  item.addEventListener("click", () => {
    const page = item.textContent.toLocaleLowerCase();
    switch (page) {
      case "home":
        displayHomePage();
        break;
      case "menu":
        displayMenuPage();
        break;
      case "about":
        displayAboutPage();
        break;
      default:
        displayHomePage();
        break;
    }
  })
);
