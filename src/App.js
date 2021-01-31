import React, { useState } from "react";
import { Switch, Route, Link } from "react-router-dom";
import AddFunds from "./components/AddFunds";
import AllTransactions from "./components/AllTransactions";
import AllWallets from "./components/AllWallets";
import CheckBalance from "./components/CheckBalance";
import NewWallet from "./components/NewWallet";
import SpendFunds from "./components/SpendFunds";
import "./App.css";

function App() {
  const newObj = {
    id: "",
    name: "",
    Date: "",
    phnum: "",
    amount: "",
    balance: "",
  };
  const initial = [
    {
      id: "1",
      name: "Name1",
      Date: "12 Jan, 5 pm",
      phnum: "9988998777",
      amount: "",
      balance: "765.43",
    },
    {
      id: "2",
      name: "Name2",
      Date: "12 Jan, 5 pm",
      phnum: "7763423688",
      amount: "",
      balance: "443.24",
    },
    {
      id: "3",
      name: "Name3",
      Date: "12 Jan, 5 pm",
      phnum: "3434565466",
      amount: "",
      balance: "20.05",
    },
  ];
  const [person, setPerson] = useState(initial);

  const addNewUser = (user) => {
    newObj.id = user.id;
    newObj.name = user.name;
    newObj.phnum = user.phnum;
    newObj.amount = user.amount;
    newObj.balance = user.balance;

    const newUser = { ...newObj };
    person.push(newUser);
    setPerson([...person]);
  };
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
              <NewWallet lisT={person} setUser={addNewUser} />
            </Route>
            <Route path="/checkBalance">
              <CheckBalance users={person}/>
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
              <AllWallets val={person} />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
