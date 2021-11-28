import Kiwi from './kiwi.jpg';
import './app2.css';

class App2 {
    render() {
        const img = document.createElement('img');
        img.src = Kiwi;
        img.alt = 'kiwi';
        img.classList.add('kiwi-image')

        const bodyDomElement = document.querySelector('body');
        bodyDomElement.appendChild(img)
    }
}

export default App2;