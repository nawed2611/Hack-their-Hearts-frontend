import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Styles/selectform-style.scss";

export default function SelectChat() {
  let [otherNumber, setOtherNumber] = useState(0);
  let navigate = useNavigate();

  function submitForm() {
    if (
      typeof otherNumber === "number" &&
      otherNumber.toString().length !== 0
    ) {
      navigate(`/Chat?alt_phone=${otherNumber}`);
    } else {
      alert("Not Valid");
    }
  }

  return (
    <form className="select-chat-form" onSubmit={submitForm}>
      <label>
        Enter your phone number
        <input
          value={otherNumber}
          onChange={(e) => setOtherNumber(Number(e.target.value))}
        />
      </label>
      <button id="select-btn" type="submit">
        Submit
      </button>
    </form>
  );
}
