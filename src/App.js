import React, { useEffect, useState } from 'react';
import './App.css';
import fire from './config/Fire'

function App() {

  const [loginstatus, setLoginStatus] = useState(false)
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/sign_out" component={Sign_out} />
        <Route exact path="/sign_in" component={Sign_in} />
      </Router>
    </div>
  );
}

export default App;
