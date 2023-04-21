import './App.css';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppProvider } from './configuration/state';
import { Contact } from './componenets/Contact';
import { Education } from './componenets/Education';
import { About } from './componenets/About';

function App() {
  return (
   <div className="App">
    <AppProvider>
      <Router>
        <Routes>
          <Route path='/' element={<Contact />} />
          <Route path='/education' element={<Education />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/confirm" element={<Confirm />} /> */}
        </Routes>
      </Router>
    </AppProvider>
   </div>
  );
}

export default App;
