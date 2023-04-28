import { addListeners } from './index.js';

export function createMenu() {
  const content = document.getElementById('content');
  let navSection = `<div id="sidebar">
        <div id="logo">
          <img src="./img/logo.png" alt="Eat My Food Logo" />
        </div>
        <div id="navigation">
          <ul id="nav-list">
            <li id="aboutNav" >About Us</li>
            <li id="menuNav" class="active">Menu</li>
            <li id="contactNav">Contact us</li>
          </ul>
        </div>
      </div>
      <div id="mainBody">
        <p style="background-image: url(./img/Background\ Kitchen.png)"></p>
    <div id="menuSection1">
      <h2>Appetizers</h2>
      <ul>
        <li>Pie - Savory pie filled with tender beef and aromatic vegetables, served with a side of tomato sauce.<br></li>
        <li>Cheesymite Scroll - Classic Australian Vegemite scrolls with light buttery dough, generously spread with savory Vegemite, baked to perfection.<br> </li>
      </ul>
    </div>
    <div id="menuSection2">
      <h2>Mains</h2>
      <Ul>
        <li>Grilled Barramundi - Fresh Barramundi fillet, grilled to perfection and served with a zesty lemon herb sauce, accompanied by seasonal vegetables and garlic mashed potatoes.<br></li>
        <li> Parm - Crispy breaded chicken breast topped with rich tomato sauce, melted cheese, and slices of ham, served with golden fries and a fresh garden salad.<br></li>
      </Ul>
    </div>

       <div id="menuSection3">
      <h2>Desserts</h2>
      <ul>
        <li>Lammi - Light and fluffy sponge cake coated in chocolate and desiccated coconut, served with a side of whipped cream.<br></li>
        <li>Pav - A traditional Australian dessert of light and airy meringue, topped with fresh whipped cream and a colorful medley of seasonal fruits.<br></li>
      </ul>
   
      </div>
      <div id="footer">by Marc de St Pern</div>`;
  content.innerHTML = navSection;
  addListeners();
}
