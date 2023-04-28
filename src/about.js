import { addListeners } from './index.js';

export function createAbout() {
  const content = document.getElementById('content');
  let navSection = `      <div id="sidebar">
        <div id="logo">
          <img src="./img/logo.png" alt="Eat My Food Logo" />
        </div>
        <div id="navigation">
          <ul id="nav-list">
            <li id="aboutNav" class="active">About Us</li>
            <li id="menuNav">Menu</li>
            <li id="contactNav">Contact us</li>
          </ul>
        </div>
      </div>
      <div id="mainBody">
        <p style="background-image: url(./img/Background\ Kitchen.png)"></p>
        <div id="mbSection1"><h1>About Eat My Food Kitchen</h1></div>
        <div id="mbSection2">
          <p>
            Welcome to Eat My Food Kitchen, where we bring the flavors of
            Australia to the heart of Downtown Tuscaloosa, Alabama. Our mission
            is to share our passion for authentic Australian cuisine with our
            guests in a warm and welcoming atmosphere.<br /><br />
          </p>

          <p>
            Established in 2023, Eat My Food Kitchen was founded by a team of
            Australian chefs who saw the need to showcase the diversity of their
            home country's culinary heritage. Inspired by the land Down Under,
            our menu features a unique blend of ingredients and flavors that you
            won't find anywhere else in town.<br /><br />
          </p>

          <p>
            Join us at Eat My Food Kitchen on The Strip and experience a
            culinary adventure that transports you to the beautiful landscapes
            of Australia.
          </p>
        </div>
        <div id="mbSection3"></div>
      </div>
      <div id="footer">by Marc de St Pern</div>`;
  content.innerHTML = navSection;
  addListeners();
}
