import dishesCards from "../menu.json";
import cardCreate from '../templates/card.hbs';

const jsMenu = document.querySelector(".js-menu");
const markup = cardCreate(dishesCards);
jsMenu.insertAdjacentHTML('beforeend', markup);