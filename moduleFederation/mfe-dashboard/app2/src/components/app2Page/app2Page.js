import Component2 from '../component2/component2';
import Header from '../common/header/header'

class App2Page {
    render() {
        const header = new Header();
        header.render('common')
        
        const component2 = new Component2();
        component2.render()
        
    }
}

export default App2Page;