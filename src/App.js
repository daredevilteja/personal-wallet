import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div>
        <h1>Personal Wallet UI</h1>
      </div>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">All Wallets</Link>
            </li>
            <li>
              <Link to="/newWallet">New Wallet</Link>
            </li>
            <li>
              <Link to="/checkBalance">Check Balance</Link>
            </li>
            <li>
              <Link to="/addFunds">Add Funds</Link>
            </li>
            <li>
              <Link to="/spendFunds">Spend Funds</Link>
            </li>
            <li>
              <Link to="/allTransactions">All Transactions</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <Switch>
          <Route path="/newWallet">New Wallet</Route>
          <Route path="/checkBalance">s</Route>
          <Route path="/addFunds">t</Route>
          <Route path="/spendFunds">td</Route>
          <Route path="/allTransactions">db</Route>
          <Route path="/">d</Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
