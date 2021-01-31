import React, { useState } from "react";
import "./styles.css";

export default function NewWallet(props) {
  const [msg, setMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newObj = {
      id: "",
      name: "",
      phnum: "",
      amount: "",
      balance: "",
    };

    newObj.id = props.lisT.length + 1;
    newObj.name = e.target[0].value;
    newObj.phnum = e.target[1].value;
    newObj.amount = e.target[2].value;
    newObj.balance = Number(newObj.amount);

    const newUser = { ...newObj };

    props.setUser(newUser);
    setMsg("User has Added Successfully!");
  };

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)} className="new-wallet">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" /> <br />
        <label htmlFor="phone">Phone</label>
        <input type="number" id="phone" name="Phone" /> <br />
        <label htmlFor="amount">Amount (RS)</label>
        <input type="text" id="amount" name="amount" /> <br />
        <div className="sub">
          <input type="submit" value="Submit" /> <br />
        </div>
      </form>
      <p className="usr-msg">{msg}</p>
    </>
  );
}
