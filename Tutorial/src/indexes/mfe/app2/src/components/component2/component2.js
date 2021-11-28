import Kiwi from './kiwi.jpg';
import './component2.css';

class Component2 {
    render() {
        const img = document.createElement('img');
        img.src = Kiwi;
        img.alt = 'kiwi';
        img.classList.add('component-2-img')

        const bodyDomElement = document.querySelector('body');
        bodyDomElement.appendChild(img)
    }
}

export default Component2;