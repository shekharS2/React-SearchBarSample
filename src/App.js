import './App.css';
import SearchBar from './components/SearchBar';
import playersData from './Data.json'

function App() {
  
  return (
    <>
      <div className='App'>
        <SearchBar playersData={playersData} placeHolder="Enter player name..." />
      </div>
    </>
  );
}

export default App;
