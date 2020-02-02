import React, { useState, useEffect }  from 'react';
import logo from './logo.png';
import './App.css';

function App() {
  const [data, setData] = useState({ name: 'unknown' });

  const fetchData = async () => {
    const response = await fetch('/api/name');
    const result = await response.json();
    setData({name: result});
  };

  useEffect (() => {
    fetchData();
  }, []);

  return (
    <div className="main">
      <img src={logo} alt="" width="100" /><br />
      Hello {data.name}
    </div>
  );
}

export default App;
