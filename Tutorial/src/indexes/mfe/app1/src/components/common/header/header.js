import './header.css'

class Header { 
    render(component) {
        const header = document.createElement('h1');
        header.innerHTML = 'webpack is awesome, component:' + component;
        header.classList.add(this.buttonCssClass)
        const body = document.querySelector('body');
        body.appendChild(header)
    }
}

export default Header;