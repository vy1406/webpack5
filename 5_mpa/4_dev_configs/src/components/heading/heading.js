import './heading.scss'

class Heading {
    render(pageName = 'default') {
        const h1 = document.createElement('h1')
        const body = document.querySelector('body')
        h1.innerHTML = 'Life is like a box of chocolates, from page ' + pageName
        body.appendChild(h1)
    }
}

export default Heading;