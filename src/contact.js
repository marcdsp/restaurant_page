import { addListeners } from './index.js';

export function createContact() {
  const content = document.getElementById('content');
  let navSection = `<div id="sidebar">
        <div id="logo">
          <img src="./img/logo.png" alt="Eat My Food Logo" />
        </div>
        <div id="navigation">
          <ul id="nav-list">
            <li id="aboutNav">About Us</li>
            <li id="menuNav">Menu</li>
            <li id="contactNav" class="active">Contact us</li>
          </ul>
        </div>
      </div>
      <div id="mainBody">
        <p>
          We're always excited to hear from our guests and answer any questions
          you may have. Whether you'd like to make a reservation, provide
          feedback, or inquire about our menu, our friendly team is here to
          help. Get in touch with us and let us make your Eat My Food Kitchen
          experience memorable.
        </p>

        <div id="mbSection1">
          <h2>Contact Information</h2>
          <p>
            Address:<br />
            Eat My Food Kitchen<br />
            123 The Strip<br />
            Downtown Tuscaloosa, AL 35401<br />
          </p>
          <p>
            Phone:<br />
            (205) 555-1234
          </p>
          <p>
            Email:<br />
            <a href="mailto:info@eatmyfoodkitchen.com"
              >info@eatmyfoodkitchen.com</a
            >
          </p>
        </div>
        <div id="mbSection3">
          <p>
            Operating Hours:<br />
            Monday - Thursday: 11:00 AM - 10:00 PM<br />
            Friday - Saturday: 11:00 AM - 11:00 PM<br />
            Sunday: 11:00 AM - 9:00 PM
          </p>
        </div>
        <div id="mbSection3">
          <h2>Follow us on Social Media</h2>
          <p>
            Facebook:
            <a
              href="https://www.facebook.com/EatMyFoodKitchenTuscaloosa"
              target="_blank"
              >@EatMyFoodKitchenTuscaloosa</a
            ><br />
            Instagram:
            <a
              href="https://www.instagram.com/eatmyfoodkitchen_tuscaloosa"
              target="_blank"
              >@eatmyfoodkitchen_tuscaloosa</a
            ><br />
            Twitter:
            <a href="https://twitter.com/EMFKitchenTusca" target="_blank"
              >@EMFKitchenTusca</a
            >
          </p>
        </div>
      </div>
      <div id="footer">by Marc de St Pern</div>`;
  content.innerHTML = navSection;
  addListeners();
}
