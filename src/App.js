import './main.css';
import Header from './components/Header.jsx'
import Body from './components/Body.jsx';

function App() {
    return (
        <div className="container-fluid" id="main-page">
            <Header/>
            <Body/>
        </div>
    );
}

export default App;