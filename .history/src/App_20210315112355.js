// import logo from './logo.svg';
import imageOne from '../media/imageOne.jpg';
import './App.css';
import Navbar from './comoponents/Navbar';

function App() {
  return (
    <Navbar />
                    <div className="image-wrapper">
<img src={imageOne} className={ style.image} alt="beauty woman"/>
                </div>
  );
}

export default App;
