import React from "react";
import "./styles.css";

export default function AllWallets(props) {
  const person = props.val;
  return (
    <>
      <table>
        <tr>
          <th>User Id</th>
          <th>Name</th>
          <th>Phone</th>
          <th>Balance (Rs)</th>
        </tr>

        {person.map((val, idx) => {
          return (
            <tr key={`${val}_${idx}`}>
              <td>{`Usr ${val.id}`}</td>
              <td>{val.name}</td>
              <td>{val.phnum}</td>
              <td>{val.balance}</td>
            </tr>
          );
        })}
      </table>
    </>
  );
}
