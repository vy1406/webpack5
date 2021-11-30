import someImage from './someImage.jpg';
import altText from './altText.txt'

function addImage() {
    const img = document.createElement('img');
    img.alt = altText;
    img.width = 300;
    img.src = someImage;
    const body = document.querySelector('body');
    body.appendChild(img);
}

export default addImage; 