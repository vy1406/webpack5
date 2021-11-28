import Kiwi from './kiwi.jpg';
import './kiwi-image.css';

class KiwiImage {
    render() {
        const img = document.createElement('img');
        img.src = Kiwi;
        img.alt = 'kiwi';
        img.classList.add('kiwi-image')

        const bodyDomElement = document.querySelector('body');
        bodyDomElement.appendChild(img)
    }
}

export default KiwiImage;