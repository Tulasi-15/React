import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Users from './Users';
import Add from './Add';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Users/>}/>
          <Route path='/createUser' element={<Add/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
