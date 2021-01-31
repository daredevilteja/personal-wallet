import React, { useState } from "react";
import "./styles.css";

export default function CheckBalance(props) {
  const [balance, setBalance] = useState("");

  let userList = props.users.map((val, idx) => val.name);
  userList = [" ", ...userList];

  const checkBalance = (e) => {
    e.preventDefault();
    const reqUser = e.target[0].value;

    props.users.forEach((val, idx) => {
      if (val.name === reqUser) {
        setBalance(val.balance);
      }
    });
  };
  return (
    <>
      <form onSubmit={(e) => checkBalance(e)} className="check-balance">
        <label htmlFor="name">Name</label>
        <select id="name" name="name">
          {userList.map((val, idx) => (
            <option value={`${val}`} key={`${val}_${idx}`}>
              {val}
            </option>
          ))}
        </select>
        <div className="sub">
          <input type="submit" value="Get Balance" />
        </div>
      </form>
      {balance !== "" ? (
        <p className="availBal">{`Available Balance is ${balance}`}</p>
      ) : null}
    </>
  );
}
