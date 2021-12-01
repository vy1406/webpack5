import './app1.css'

class App1 { 
    buttonCssClass = 'component-1'
    
    render () {
        const button = document.createElement('button');
        button.innerHTML = 'Add Paragraph';
        button.classList.add(this.buttonCssClass)
        const body = document.querySelector('body');
        button.onclick = function () { 
            const p = document.createElement('p');
            p.innerHTML = 'lol...';
            p.classList.add('component-1-text');
            body.appendChild(p)
        }
        body.appendChild(button)
    }
}

export default App1;