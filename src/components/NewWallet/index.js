import React from "react";
import "./styles.css";

export default function NewWallet() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" /> <br />
        <label htmlFor="phone">Phone</label>
        <input type="number" id="phone" name="Phone" /> <br />
        <label htmlFor="amount">Amount (RS)</label>
        <input type="text" id="amount" name="amount" /> <br />
        <input type="submit" value="Submit" /> <br />
      </form>
    </>
  );
}
