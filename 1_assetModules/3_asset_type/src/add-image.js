import someImage from './someImage.jpg';

function addImage() {
    const img = document.createElement('img');
    img.alt = 'alt text';
    img.width = 300;
    img.src = someImage;
    const body = document.querySelector('body');
    body.appendChild(img);
}

export default addImage; 