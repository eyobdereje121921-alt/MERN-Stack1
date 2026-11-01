import { BrowserRouter, Routes, Route } from 'react-router-dom'

// pages & components
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Student from './pages/Student';
import Register from './pages/Register';
function App() {

  return (
    <div className="App">
      <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route 
              path="/" 
              element={<Home />} 
            />
             <Route 
              path="/student" 
              element={<Student/>} 
            />
             <Route 
              path="/register" 
              element={<Register/>} 
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
