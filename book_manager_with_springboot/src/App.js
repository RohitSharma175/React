import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Menus from './components/Menus.js';
import Home from './components/Home';
import AddCourse from './components/addCourse';
import AllCourse from './components/allCourse';
import { BrowserRouter as Router, Route,Routes,Link } from 'react-router-dom';
import {
  Button,
  Container,
  Row,
  Col
} from "reactstrap";
import { ToastContainer, toast } from 'react-toastify';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.min.css';


function App() {
 

  return (
    <div>
      <ToastContainer />
      <Router>
        <Container>
          <Header />
          <Row>
            <Col md={4}>
              <Menus />
            </Col>
            <Col md={8}>
              <Routes>
                <Route path='/' element={<Home/>} exact></Route>
                <Route path='/add-course' element={<AddCourse/>} exact></Route>
                <Route path='/view-course' element={<AllCourse/>} exact></Route>
              </Routes>
            </Col>
          </Row>
        </Container>

      </Router>
    </div>
  );
}

export default App;
