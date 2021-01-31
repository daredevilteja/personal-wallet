import React from "react";
import "./styles.css";

export default function AllTransactions(props) {
  return (
    <>
      <table>
        <tr>
          <th>Name</th>
          <th>Date</th>
          <th>Amount (Rs)</th>
          <th>Balance (Rs)</th>
        </tr>

        {props.users.map((val, idx) => {
          return val.transactions.map((a) => {
            return (
              <tr>
                <td>{val.name}</td>
                <td>{a.Date}</td>
                <td>{a.amount}</td>
                <td>{a.conBalance}</td>
              </tr>
            );
          });
        })}
      </table>
    </>
  );
}
