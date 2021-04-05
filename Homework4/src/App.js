import './App.css';
import Search from './components/Search';
import Dog from './components/Dog';
import './CSS/site.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <h3>Find your favorite dog breed</h3>
        <Search></Search>
        <Dog></Dog>
      </header>
    </div>
  );
}

export default App;
