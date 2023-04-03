
import './App.css';
import AboutUs from './containers/about/About';
import Explore from './containers/explore/Explore';
import Footer from './containers/footer/Footer';
import Home from './containers/home/Home';

function App() {
  return (
    <div className="App">
      <Home />
      <Explore />
      <AboutUs />
      <Footer />
    </div>
  );
}

export default App;
