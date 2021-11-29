const url = window.location.pathname
console.log(url)

if ( url === '/app1Page') {

    import('NameOfApp1/App1Page').then(exposedModule => {
        const App1Page = exposedModule.default; // == app2/src/components/component2 -> export default Component2;
        const app1page = new App1Page()
        app1page.render()
    })
    
} else if ( url === '/app2Page') {

    import('NameOfApp2/App2Page').then(exposedModule => {
        const App2Page = exposedModule.default; // == app2/src/components/component2 -> export default Component2;
        const app2page = new App2Page()
        app2page.render()
    })
    
}

console.log('dashboard')