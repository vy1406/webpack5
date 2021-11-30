import './button.scss'

class Button {
    render() {
        const button = document.createElement('button');
        button.innerHTML = 'Forrest !';
        button.classList.add('button-style')
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