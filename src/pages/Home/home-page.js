import HeroImage from "../../images/hero.png";
import "./style.css";

function generateHeroText() {
  const heroText = Object.assign(document.createElement("div"), {
    className: "hero-text",
  });

  const h2 = Object.assign(document.createElement("h2"), {
    textContent: "Welcome to Celestial Delights",
  });
  const p = Object.assign(document.createElement("p"), {
    textContent:
      "Embark on a culinary journey where every dish is crafted to perfection, inspired by the mysteries of the cosmos. Let the stars guide you to an unforgettable dining experience, where flavors are as limitless as the night sky.",
  });
  const button = Object.assign(document.createElement("button"), {
    textContent: "Explore Our Menu",
    className: "cta-button",
  });

  heroText.appendChild(h2);
  heroText.appendChild(p);
  heroText.appendChild(button);
  return heroText;
}

function generateHeroImage() {
  const heroImage = Object.assign(document.createElement("div"), {
    className: "hero-image",
  });
  const image = Object.assign(document.createElement("img"), {
    src: HeroImage,
    width: 400,
    alt: "Hero Image",
  });

  heroImage.appendChild(image);
  return heroImage;
}

function generateHero() {
  const hero = Object.assign(document.createElement("div"), {
    className: "hero",
  });
  const heroText = generateHeroText();
  const heroImage = generateHeroImage();

  hero.appendChild(heroText);
  hero.appendChild(heroImage);
  return hero;
}

export default function displayHomePage() {
  const content = document.getElementById("content");
  content.innerHTML = "";
  const container = Object.assign(document.createElement("div"), {
    className: "container",
  });
  const homePage = Object.assign(document.createElement("div"), {
    id: "home-page",
  });

  const hero = generateHero();
  homePage.appendChild(hero);

  container.appendChild(homePage);
  content.appendChild(container);
}
