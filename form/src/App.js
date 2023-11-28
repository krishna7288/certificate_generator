import Footer from './components/Footer';
import MyForm from './components/Form';
import Navbar from './components/Navbar';
import TopBar from './components/Topbar';
import  './App.css'

function App() {
  return (
    <div className="App">
       <TopBar/>
       <Navbar/>
       <MyForm/><br></br><br></br>
       <Footer/>
    </div>
  );
}

export default App;
