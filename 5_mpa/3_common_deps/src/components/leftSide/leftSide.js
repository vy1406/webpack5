import './leftSide.scss'

class LeftSide {
    buttonCssClass = 'left-side-style'
    
    render() {
        const button = document.createElement('button');
        button.innerHTML = 'Lieutenant Dan Taylor';
        button.classList.add(this.buttonCssClass)
        const body = document.querySelector('body')
        button.onclick = () => {
            const p = document.createElement('p')
            p.innerHTML = 'You call this a storm ?'
            p.classList.add('storm-style')
            body.appendChild(p)
        }
        body.appendChild(button)
    }
}
export default LeftSide; 