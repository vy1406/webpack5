import Button from './components/button/button';
import Heading from './components/heading/heading'

const heading = new Heading();
heading.render();
const button = new Button();
button.render()

let BubbaGump = 'Corporation'

if ( process.env.NODE_ENV === 'production') {
    console.log('production mode')
} else if ( process.env.NODE_ENV === 'development') {
    console.log('development mode')
} else { 
    console.log('none mode')
}

button.methodThatDoesNotExist()