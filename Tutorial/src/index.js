import helloWorld from './hello-world.js';
import addImage from './add-image.js';
import HelloWorldButton from './components/hello-world-button/hello-world-button';
import Header from './components/header/header'

const header = new Header();
header.render()

const helloWorldButton = new HelloWorldButton();
helloWorldButton.render()

