import './component1.css'

class Component1 { 
    buttonCssClass = 'component-1'
    
    render (text) {
        const button = document.createElement('button');
        button.innerHTML = 'Add Paragraph';
        button.classList.add(this.buttonCssClass)
        const body = document.querySelector('body');
        button.onclick = function () { 
            const p = document.createElement('p');
            p.innerHTML = text || 'Default lol';
            p.classList.add('component-1-text');
            body.appendChild(p)
        }
        body.appendChild(button)
    }
}

export default Component1;