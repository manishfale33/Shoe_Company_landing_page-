import NavBar from './component/NavBar'
import Hero from './component/Hero'
import Carousel from './component/Carousel'
import Footer from './component/Footer';
import './App.css';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Hero/>
      <Carousel />
      <Footer />
    </div>
  );
}

export default App;
