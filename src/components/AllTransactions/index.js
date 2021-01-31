import React from "react";
import "./styles.css";

export default function AllTransactions() {
  return (
    <>
      <table>
        <tr>
          <th>Name</th>
          <th>Date</th>
          <th>Amount (Rs)</th>
          <th>Balance (Rs)</th>
        </tr>

        <tr>
          <td>Name1</td>
          <td>12 Jan, 5 pm</td>
          <td>+125</td>
          <td>225</td>
        </tr>
        <tr>
          <td>Name1</td>
          <td>12 Jan, 6 pm</td>
          <td>-50</td>
          <td>175</td>
        </tr>
        <tr>
          <td>Name2</td>
          <td>13 Jan, 1 am</td>
          <td>-65</td>
          <td>334.05</td>
        </tr>
        <tr>
          <td>Name3</td>
          <td>16 Jan, 2 pm</td>
          <td>+22.33</td>
          <td>122.33</td>
        </tr>
      </table>
    </>
  );
}
