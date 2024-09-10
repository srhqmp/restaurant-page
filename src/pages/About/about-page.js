import Icon from "../../images/icons/sun-icon.svg";
import { generateElement } from "../../helpers";
import "./style.css";

export default function displayAboutPage() {
  const content = document.getElementById("content");
  content.innerHTML = "";
  const container = Object.assign(document.createElement("div"), {
    className: "container",
  });
  const aboutPage = Object.assign(document.createElement("div"), {
    id: "about-page",
  });

  const image = generateElement({ type: "img", src: Icon, alt: "Sun Logo" });
  const header = generateElement({
    type: "h2",
    textContent: "A Taste of the Stars",
  });
  const p1 = generateElement({
    type: "p",
    textContent:
      "Welcome to Celestial Delights, where the wonders of Teyvat meet the artistry of fine dining.",
  });
  const p2 = generateElement({
    type: "p",
    textContent:
      "Inspired by the celestial beauty and mystical realms of your favorite adventures, our restaurant offers an enchanting escape from the ordinary. At Celestial Delights, each dish is crafted with the same care and creativity as a treasured recipe from Mondstadt or Liyue.",
  });
  const p3 = generateElement({
    type: "p",
    textContent:
      "Join us on a gastronomic journey through the stars and indulge in a dining experience that's truly out of this world.",
  });

  aboutPage.appendChild(image);
  aboutPage.appendChild(header);
  aboutPage.appendChild(p1);
  aboutPage.appendChild(p2);
  aboutPage.appendChild(p3);
  container.appendChild(aboutPage);
  content.appendChild(container);
}
