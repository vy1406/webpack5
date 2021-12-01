import App2 from './components/app2/app2.component.js';
import Header from './components/common/header/header.js';

const header = new Header();
header.render('kiwi');

const app2 = new App2();
app2.render();