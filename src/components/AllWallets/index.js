import React from "react";
import "./styles.css";

export default function AllWallets() {
  return (
    <>
      <table>
        <tr>
          <th>User Id</th>
          <th>Name</th>
          <th>Phone</th>
          <th>Balance (Rs)</th>
        </tr>

        <tr>
          <td>Usr1</td>
          <td>Name1</td>
          <td>9988998777</td>
          <td>765.43</td>
        </tr>
        <tr>
          <td>Usr2</td>
          <td>Name2</td>
          <td>7763423688</td>
          <td>443.24</td>
        </tr>
        <tr>
          <td>Usr3</td>
          <td>Name3</td>
          <td>3434565466</td>
          <td>20.05</td>
        </tr>
      </table>
    </>
  );
}
