import Heading from './components/heading/heading'
import LeftSide from './components/leftSide/leftSide';
import _ from 'lodash';

const heading = new Heading();
heading.render(_.upperCase('left-side'));
const leftSide = new LeftSide();
leftSide.render()

if ( process.env.NODE_ENV === 'production') {
    console.log('production mode')
} else if ( process.env.NODE_ENV === 'development') {
    console.log('development mode')
} else { 
    console.log('none mode ? ')
}
