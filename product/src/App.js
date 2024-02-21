import logo from './logo.svg';
import './App.css';
import phone from './imgs/mobile.jpeg'
import { Link } from 'react-router-dom';

function App() {
  // const [cart, setCart] = useState({});
  return (
    <div className="App">
      <Link style={{textDecoration: 'none'}} to="category/0">
        <div className="category">
          <img src={phone} alt="phones"/>
          <label>Smart Phones</label>
        <h4>Explore..</h4>
        </div>
      </Link>
      <Link style={{textDecoration: 'none'}} to="category/1">
        <div className="category">
          <img src={phone} alt="phones"/>
          <label>Clothing</label>
        <h4>Explore..</h4>
        </div>
      </Link>
      <Link  style={{textDecoration: 'none'}} to="category/2">
        <div className="category">
          <img src={phone} alt="phones"/>
          <label>Accesories</label>
        <h4>Explore..</h4>
        </div>
      </Link>
    </div>
  );
}

export default App;
