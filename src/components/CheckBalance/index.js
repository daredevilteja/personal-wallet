import React from "react";
import "./styles.css";

export default function CheckBalance() {
  const checkBalance = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <form onSubmit={(e) => checkBalance(e)} className="check-balance">
        <label htmlFor="name">Name</label>
        <select id="name" name="name">
          <option value=""> </option>
          <option value="Usr1">Usr1</option>
          <option value="Usr2">Usr2</option>
          <option value="Usr3">Usr3</option>
        </select>
        <div className="sub">
          <input type="submit" value="Get Balance" />
        </div>
      </form>
    </>
  );
}
