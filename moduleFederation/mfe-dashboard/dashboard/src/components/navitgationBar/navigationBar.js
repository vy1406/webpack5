import './navigationBar.css'

class NavigationBar {
    render(navigationItems) {
        const listItems = navigationItems.map(navigationItem => {
            return `
            <li>
                <a href="${navigationItem.url}">${navigationItem.title}</a>
            </li>
            `
        })
        const ul = document.createElement('ul')
        ul.innerHTML = listItems.join('')
        ul.classList.add('navigation-bar');
        document.querySelector('body').appendChild(ul)
    }
}

export default NavigationBar