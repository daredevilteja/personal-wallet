import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import AddFunds from "./components/AddFunds";
import AllTransactions from "./components/AllTransactions";
import AllWallets from "./components/AllWallets";
import CheckBalance from "./components/CheckBalance";
import NewWallet from "./components/NewWallet";
import SpendFunds from "./components/SpendFunds";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="Title">
        <h1>Personal Wallet UI</h1>
      </div>
      <div className="body-container">
        <div className="navbar">
          <nav>
            <ul className="nav-text">
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
        <div className="main-container">
          <Switch>
            <Route path="/newWallet">
              <NewWallet />
            </Route>
            <Route path="/checkBalance">
              <CheckBalance />
            </Route>
            <Route path="/addFunds">
              <AddFunds />
            </Route>
            <Route path="/spendFunds">
              <SpendFunds />
            </Route>
            <Route path="/allTransactions">
              <AllTransactions />
            </Route>
            <Route path="/">
              <AllWallets />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
