import React from "react";
import "./styles.css";

export default function AddFunds() {
  const addFunds = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <form onSubmit={(e) => addFunds(e)} className="add-funds">
        <label htmlFor="name">Name</label>
        <select id="name" name="name">
          <option value=""> </option>
          <option value="Usr1">Usr1</option>
          <option value="Usr2">Usr2</option>
          <option value="Usr3">Usr3</option>
        </select>
        <br />
        <label htmlFor="amount">Amount (Rs)</label>
        <input type="number" id="amount" name="amount" /> <br />
        <div className="sub">
          <input type="submit" value="Get Balance" />
        </div>
      </form>
    </>
  );
}
