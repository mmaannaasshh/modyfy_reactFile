// import logo from './logo.svg';
import './App.css';
import TextBox from './componants/TextBox';
import { useState } from 'react';
import Alert from './componants/Alert';
import Navbar from './componants/Navbar';
import {
  BrowserRouter as Router,
   Route,
   Routes
  //  Link
} from "react-router-dom";


function App() {
  const [mode, setmode] = useState('light')
  const [alert, setalert] = useState(null)

  const showalert=(messege,type)=>{
    setalert({
      msg:messege,
      type:type
    })
    setTimeout(() => {
      setalert(null)
    }, 1000);
  }
  const toggle = () => {
    if (mode==='light') {
      setmode('dark')
      document.body.style.backgroundColor='grey';
      showalert('darkmode is enabled','primary') 
     
    }else{
      setmode('light')
      document.body.style.backgroundColor='white';

     
    }
  }
  return (
    <div>
     <Navbar mode={mode} alert={alert} toggle={toggle}  />
     <Alert  alert={alert}/>
      <Router>
       <Routes>
        <Route path='/' element={<TextBox mode={mode} alert={alert} showalert={showalert}/>} />
       </Routes>
        
      </Router>
      </div>
  );                                                  
}

export default App;
