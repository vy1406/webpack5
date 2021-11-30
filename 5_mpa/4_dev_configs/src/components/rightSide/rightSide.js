import './rightSide.scss'

class RightSide {
    buttonCssClass = 'right-side-style'
    
    render() {
        const button = document.createElement('button');
        button.innerHTML = 'Jenny';
        button.classList.add(this.buttonCssClass)
        const body = document.querySelector('body')
        button.onclick = () => {
            const p = document.createElement('p')
            p.innerHTML = 'Make me a bird.'
            p.classList.add('bird-style')
            body.appendChild(p)
        }
        body.appendChild(button)
    }
}
export default RightSide; 