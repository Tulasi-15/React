import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Users from './Users';
import Update from './Update';
import Add from './Add';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Users/>}/>
          <Route path='/createUser' element={<Add/>}/>
          <Route path='/updateUser/:id' element={<Update/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
