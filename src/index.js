import { createAbout } from './about.js';
import { clearPage } from './clear.js';
import { createContact } from './contact.js';
import { createMenu } from './menu.js';

export function addListeners() {
  document.getElementById('aboutNav').addEventListener('click', clearPage);
  document.getElementById('aboutNav').addEventListener('click', createAbout);

  document.getElementById('menuNav').addEventListener('click', clearPage);
  document.getElementById('menuNav').addEventListener('click', createMenu);

  document.getElementById('contactNav').addEventListener('click', clearPage);
  document
    .getElementById('contactNav')
    .addEventListener('click', createContact);
}

createAbout();
