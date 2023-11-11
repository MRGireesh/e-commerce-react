import './App.css';
import { FilteredProducts } from './Components/FilteredProducts/FilteredProducts';
import { Main } from './Components/Main/Main';
import {BrowserRouter as Router , Route, Routes} from 'react-router-dom'; 

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/filteredProducts/:type' element={<FilteredProducts/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
