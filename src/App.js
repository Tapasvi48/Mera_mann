import React from 'react';
import Contact from './components/Contact.jsx';
import Navbar from "./components/Navbar.jsx";
import Content from './components/Content.jsx';
import About from "./components/About.jsx";
import Login from "./components/Login.jsx";
import SignUp from './components/SignUp.jsx';

function App() {
  return (
    <div>
<Navbar/>
<Content/>
<About/>
 <Login/>
<SignUp/>
 <Contact/>

 </div>
  
  );
}

export default App;
