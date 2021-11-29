import Component2 from './components/component2/component2';
import Header from './components/common/header/header'

const header = new Header();
header.render('common')

const component2 = new Component2();
component2.render()

import('NameOfApp1/App1ButtonModule').then(exposedModule => {
    const App1Button = exposedModule.default; // == app2/src/components/component2 -> export default Component2;
    const app1button = new App1Button()
    app1button.render('LOOK! i am from app2!')
})