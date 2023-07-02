import './App.css';
import Home from './screens/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './screens/Login';
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import SignUp from './screens/SignUp';
// import Navbar from './components/Navbar';
import { CartProvider } from './components/ContextReducer';
import MyOrder from './screens/MyOrder';

// import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min-js';

function App() {
  return (
    <CartProvider>
    <BrowserRouter>
      {/* <div className="App"> */}
      <div className="">
        {/* <Navbar/> */}
    <Routes>
      <Route exact path="/" element={<Home />}/>
      <Route exact path="/createuser" element={<SignUp/>} />
      <Route exact path="/login" element={<Login/>} />
      <Route exact path="/myOrder" element={<MyOrder/>} />
      
    </Routes>
    </div>
  </BrowserRouter>
  </CartProvider>
  );
}

export default App;
