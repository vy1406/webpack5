import Heading from './components/heading/heading'
import RightSide from './components/rightSide/rightSide';

const heading = new Heading();
heading.render('right-side');
const rightSide = new RightSide();
rightSide.render()

if ( process.env.NODE_ENV === 'production') {
    console.log('production mode')
} else if ( process.env.NODE_ENV === 'development') {
    console.log('development mode')
} else { 
    console.log('none mode ? ')
}
