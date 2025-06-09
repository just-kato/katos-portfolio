import React, { useState, useEffect } from 'react';
import Loading from './components/Loading/Loading';
import Home from './components/Home/Home';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 4500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="App">
     <Home/>
    </div>
  );
}

export default App;
