import App1 from './components/app1/app1.component.js';
import Header from './components/common/header/header.js';

const header = new Header();
header.render('hello world...')

const app1 = new App1();
app1.render('app1')

