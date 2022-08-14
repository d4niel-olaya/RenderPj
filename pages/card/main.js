import * as Navbar from '../components/navbar/main.js';
import * as Login from '../components/login/main.js';
import * as Footer from '../components/footer/main.js';
const header = document.getElementById('header');
const main = document.getElementById('main');
const footer = document.getElementById('footer');
// Navbar.render(header);
Login.render(main);
Footer.render(footer);

if(!localStorage.getItem('sesion')){
    window.location = '/pages/card/index.html';
}
