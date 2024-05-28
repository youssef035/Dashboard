// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Sidebar from './Sidebar';
// import Dashboard from './Dashboard';
// import Clients from './Clients';
// import Demands from './Demands';
// import './App.css';

// const App = () => {
//   return (
//     <Router>
//       <div className="app">
//         <Sidebar />
//         <div className="content">
//           <Routes>
//             <Route exact path="/" element={<Dashboard />} />
//             <Route path="/clients" element={<Clients />} />
//             <Route path="/demands" element={<Demands />} />
//           </Routes>
//         </div>
//       </div>
//     </Router>
//   );
// };

// export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';
import Clients from './Clients';
import Demands from './Demands';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Dashboard />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/demands" element={<Demands />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;


