import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Register from '../pages/Register';
import Products from '../pages/Register/Products';
import Login from '../pages/Login';

function Path (){
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<Register />} />
                <Route path="/register/products" element={<Products />} />
                <Route path="/login" element={<Login />} /> 
            </Routes>
        </Router>
    );
}
export default Path;