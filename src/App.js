import './App.css';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppProvider } from './configuration/state';
import { Contact } from './componenets/Contact';

function App() {
  return (
   <div className="App">
    <AppProvider>
      <Router>
        <Routes>
          <Route path='/' element={<Contact />} />
        </Routes>
      </Router>
    </AppProvider>
   </div>
  );
}

export default App;
