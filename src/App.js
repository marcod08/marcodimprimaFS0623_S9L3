import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nabbar from './components/NabbarComponent';
import JumboTron from './components/JumboTron';
import CardBooks from './components/BooksComponent';
import Footer from './components/FooterComponent';


function App() {
  return (
    <div className="App">
      <Nabbar />
      <JumboTron />
      <CardBooks />
      <Footer />
    </div>
  );
}

export default App;
