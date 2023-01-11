import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import { Button } from "reactstrap";
import { ToastContainer, toast } from 'react-toastify';
import Home from './components/Home'
import Course from './components/Course';
import AllCourse from './components/allCourse';
import AddCourse from './components/addCourse';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const btnHandle= ()=>{
    toast.error("This is my first massage!",{
      position:'bottom-center'
    });
  }
  
  return (
    <div>
      <ToastContainer/>
      <Home/>
      <AllCourse/>
      <AddCourse/>
    </div>
  );
}

export default App;
