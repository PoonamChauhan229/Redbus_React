import './App.css';
import Searchbus from './components/Searchbus';
import Navbar from './components/Navbar';
import DisplayOffer from './components/DisplayOffer';
import Test from './components/Test';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">

      <Navbar/>
      <Searchbus/>
      <DisplayOffer/>
      <Footer/>
      
    </div>
  );
}

export default App;
