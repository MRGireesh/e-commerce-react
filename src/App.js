import "./App.css";
import { FilteredProducts } from "./Components/FilteredProducts/FilteredProducts";
import { Main } from "./Components/Main/Main";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { SingleProduct } from "./Components/SingleProduct/SingleProduct";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route
            path="/filteredProducts/:type"
            element={<FilteredProducts />}
          />
          <Route
            path="/filteredProducts/:type/:id"
            element={<SingleProduct />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
