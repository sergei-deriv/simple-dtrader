import React from 'react';
import { api2, token } from './api/api';
// import logo from './logo.svg';
import './App.css';

function App() {
  const [authResult, setAuthResult] = React.useState<any>(null);
  console.log(authResult);

  // const auth = async () => {
  //   const res = await api2.authorize(token);
  //   return res ? res : null;
  // };

  // React.useEffect(() => {
  //   const res = auth();
  //   setAuthResult(res);
  // }, []);

  return (
    <div className='App'>
      <h1>Simple DTrader</h1>
    </div>
  );
}

export default App;
