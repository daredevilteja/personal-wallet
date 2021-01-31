import React, { useState } from "react";
import "./styles.css";

export default function AddFunds(props) {
  const [msg, setMsg] = useState("");
  const newObj = {
    name: "",
    balance: "",
    transactions: [],
  };

  const calc = {
    Date: "",
    amount: "",
    conBalance: "",
  };

  let userList = props.users.map((val, idx) => val.name);
  userList = [" ", ...userList];

  const addFunds = (e) => {
    e.preventDefault();
    const reqUser = e.target[0].value;
    props.users.forEach((val, idx) => {
      if (val.name === reqUser) {
        calc.Date = new Date();
        calc.Date = calc.Date.toString().slice(0, 15);
        calc.amount = e.target[1].value;
        calc.conBalance = Number(val.balance) + Number(calc.amount);
        calc.conBalance = Number(calc.conBalance).toFixed(2);
        calc.amount = `+${calc.amount}`;

        const newCalc = { ...calc };

        newObj.balance = newCalc.conBalance;
        newObj.name = val.name;
        newObj.transactions = val.transactions;
        newObj.transactions.push(newCalc);

        props.addFunds(newObj);
        console.log(props.users);
        setMsg("Funds added successfully");
      }
    });
  };

  return (
    <>
      <form onSubmit={(e) => addFunds(e)} className="add-funds">
        <label htmlFor="name">Name</label>
        <select id="name" name="name">
          {userList.map((val, idx) => (
            <option value={`${val}`} key={`${val}_${idx}`}>
              {val}
            </option>
          ))}
        </select>
        <br />
        <label htmlFor="amount">Amount (Rs)</label>
        <input type="text" id="amount" name="amount" /> <br />
        <div className="sub">
          <input type="submit" value="Submit" />
        </div>
      </form>
      <p className="add-funds-msg">{msg}</p>
    </>
  );
}
