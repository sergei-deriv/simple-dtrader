import React from 'react';
import { getActiveSymbols } from './api/requests';
import SymbolsList from './components/symbols-list';

function App() {
  // const [authResult, setAuthResult] = React.useState<any>(null);

  // React.useEffect(() => {
  //   getActiveSymbols();
  // }, []);

  return (
    <div className='App'>
      <h1>Simple DTrader</h1>
      <SymbolsList />
    </div>
  );
}

export default App;
