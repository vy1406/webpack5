import Component1 from '../component1/component1';
import Header from '../common/header/header'

class App1Page {
    render() {
        const header = new Header();
        header.render('common')

        const component1 = new Component1();
        component1.render()
    }

}

export default App1Page;