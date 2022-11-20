import React from 'react';
import logo from './logo.svg';
import './App.css';
import AccountsScreen from './screens/AccountsScreen';
import AccountDetailScreen from './screens/AccountDetailScreen';
import Route from './components/Route';

function App() {
  return (
      <div className='screen-dimentions'>
        <Route path='/'>
          <AccountsScreen />
        </Route>
        <Route path='/account-details'>
          <AccountDetailScreen />
        </Route>
      </div>
  );
}

export default App;
