import './App.css';
import ArrowKeys from './components/arrow-keys/arrow-keys';
import MapBase from './components/mapBase/map-base';

function App() {
  return (
    
    <div className="App">
      <div className="Game-header"> My Application
        <div className="Author">Daniel Lazureanu</div>
      </div>
      <header className="App-header">
        <MapBase/>
        <ArrowKeys/>
      </header>
    </div>
  );
}

export default App;
