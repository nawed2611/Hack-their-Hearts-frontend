import React from "react";
import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";
export default function ExternalPages() {
  return (
    <div>
      <table>
        <thead>
          <th>Game Name</th>
          <th>Link</th>
        </thead>
        <tbody>
          <tr>
            <td>Wordle</td>
            <td>
              <a href="https://valentines-wordle.epiccodewizard2.repl.co/">
                Wordle Game Link
              </a>
            </td>
          </tr>
          <tr>
            <td>Tic Tac Toe</td>
            <td>
              <a href="https://tic-tac-toe.epiccodewizard2.repl.co/">
                Tic Tac Toe Game Link
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
