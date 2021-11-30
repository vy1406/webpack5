import './button.scss'

class Button {
    buttonCssClass = 'button-style'
    
    render() {
        const button = document.createElement('button');
        button.innerHTML = 'my button';
        button.classList.add(this.buttonCssClass)
        const body = document.querySelector('body')
        button.onclick = () => {
            const p = document.createElement('p')
            p.innerHTML = 'run '
            p.classList.add('p-style')
            body.appendChild(p)
        }
        body.appendChild(button)
    }
}
export default Button; 